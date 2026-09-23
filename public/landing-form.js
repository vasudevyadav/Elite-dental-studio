(() => {
  const captchaStyles = document.createElement("style");
  captchaStyles.textContent = `
    .captcha-inp {
      display: block !important;
      width: 100% !important;
      min-height: 78px;
      margin: 18px 0 22px !important;
      overflow: visible !important;
    }
    .captcha-inp .landing-recaptcha {
      width: 304px;
      max-width: 100%;
    }
    .captcha-inp > input,
    .captcha-inp > span,
    .captcha-inp > a {
      display: none !important;
    }
    @media (max-width: 360px) {
      .captcha-inp {
        min-height: 66px;
      }
      .captcha-inp .landing-recaptcha {
        transform: scale(0.84);
        transform-origin: left top;
      }
    }
  `;
  document.head.append(captchaStyles);

  function showCaptchaError(container, message) {
    container.querySelector(".landing-captcha-error")?.remove();
    const notice = document.createElement("p");
    notice.className = "landing-captcha-error";
    notice.textContent = message;
    notice.style.cssText = "margin:8px 0 0;color:#b42318;font-size:13px;";
    container.append(notice);
  }

  function showFormMessage(form, message, isError) {
    let notice = form.querySelector(".landing-form-message");
    if (!notice) {
      notice = document.createElement("p");
      notice.className = "landing-form-message";
      notice.style.cssText = "margin:12px 0;font-size:14px;font-weight:600;";
      form.append(notice);
    }
    notice.textContent = message;
    notice.style.color = isError ? "#b42318" : "#176b70";
  }

  function validateRequiredFields(form) {
    const nameField = form.querySelector('[name="name"], [name="bname"], [name="bname_"]');
    const phoneField = form.querySelector('[name="phone"], [name="bphone"], [name="bphone_"]');
    const emailField = form.querySelector('[name="email"], [name="bemail"], [name="bemail_"]');
    const locationField = form.querySelector('[name="location"]');
    const fields = [nameField, phoneField, emailField, locationField].filter(Boolean);
    const invalidFields = fields.filter((field) => {
      const value = String(field.value || "").trim();
      if (field === phoneField) return value.replace(/\D/g, "").length < 10;
      if (field === emailField) return !/^\S+@\S+\.\S+$/.test(value);
      return !value;
    });
    fields.forEach((field) => {
      field.style.borderColor = invalidFields.includes(field) ? "#d92d20" : "";
      field.setAttribute("aria-invalid", invalidFields.includes(field) ? "true" : "false");
    });
    if (invalidFields.length) {
      showFormMessage(form, "Please check the highlighted fields.", true);
      invalidFields[0].focus();
      return false;
    }
    return true;
  }

  function addEmailFields() {
    document.querySelectorAll("form.service-form").forEach((form) => {
      if (form.querySelector('[name="email"], [name="bemail"], [name="bemail_"]')) return;
      const locationField = form.querySelector('[name="location"]');
      const locationGroup = locationField?.closest(".input-group");
      if (!locationGroup) return;

      const emailGroup = document.createElement("div");
      emailGroup.className = "input-group landing-email-field";
      emailGroup.innerHTML = `
        <span class="input-group-text"><i class="fa fa-envelope" aria-hidden="true"></i></span>
        <input type="email" class="form-control" placeholder="Email" name="email" required autocomplete="email">
      `;
      locationGroup.before(emailGroup);
    });
  }

  addEmailFields();

  document.querySelectorAll("form.service-form").forEach((form) => {
    form.noValidate = true;
    const clearFieldError = (event) => {
      const field = event.target;
      if (
        !(field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement) ||
        !field.required ||
        !field.checkValidity()
      ) {
        return;
      }
      field.style.borderColor = "";
      field.setAttribute("aria-invalid", "false");
    };
    form.addEventListener("input", clearFieldError);
    form.addEventListener("change", clearFieldError);
  });

  async function mountRecaptcha() {
    const containers = [...document.querySelectorAll(".captcha-inp")];
    if (!containers.length) return;

    const response = await fetch("/api/recaptcha-site-key");
    const { siteKey } = await response.json();
    if (!siteKey) {
      containers.forEach((container) => showCaptchaError(container, "Spam protection is unavailable."));
      return;
    }

    window.onLandingRecaptchaLoad = () => {
      containers.forEach((container) => {
        const form = container.closest("form");
        if (!form) return;
        container.textContent = "";
        const widget = document.createElement("div");
        widget.className = "landing-recaptcha";
        container.append(widget);
        window.grecaptcha.render(widget, {
          sitekey: siteKey,
          callback: (token) => {
            form.dataset.captchaToken = token;
          },
          "expired-callback": () => {
            delete form.dataset.captchaToken;
          },
          "error-callback": () => {
            delete form.dataset.captchaToken;
          },
        });
      });
    };

    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?onload=onLandingRecaptchaLoad&render=explicit";
    script.async = true;
    script.defer = true;
    document.head.append(script);
  }

  mountRecaptcha().catch(() => {
    document.querySelectorAll(".captcha-inp").forEach((container) => {
      showCaptchaError(container, "Spam protection could not be loaded. Please refresh and try again.");
    });
  });

  document.addEventListener(
    "submit",
    async (event) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement) || !form.classList.contains("service-form")) return;

      event.preventDefault();
      event.stopImmediatePropagation();

      if (!validateRequiredFields(form)) return;

      if (!form.dataset.captchaToken) {
        showFormMessage(form, "Please complete the CAPTCHA.", true);
        return;
      }

      const values = new FormData(form);
      const query = new URLSearchParams(window.location.search);
      const payload = {
        name: String(values.get("name") || values.get("bname") || values.get("bname_") || ""),
        phone: String(values.get("phone") || values.get("bphone") || values.get("bphone_") || ""),
        email: String(values.get("email") || values.get("bemail") || values.get("bemail_") || ""),
        clinicSlug: String(values.get("location") || "").toLowerCase(),
        message: String(values.get("treatment") || values.get("service") || values.get("msg") || ""),
        source: `landing-page:${window.location.pathname}`,
        url: window.location.href,
        captchaToken: form.dataset.captchaToken,
        utmSource: query.get("utm_source") || "",
        utmMedium: query.get("utm_medium") || "",
        utmCampaign: query.get("utm_campaign") || "",
        utmTerm: query.get("utm_term") || "",
        utmContent: query.get("utm_content") || "",
        gclid: query.get("gclid") || "",
        utm_source: query.get("utm_source") || "",
        utm_medium: query.get("utm_medium") || "",
        utm_campaign: query.get("utm_campaign") || "",
        utm_term: query.get("utm_term") || "",
        utm_content: query.get("utm_content") || "",
      };
      const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');
      const originalLabel = submitButton && (submitButton.value || submitButton.textContent);
      if (submitButton) {
        submitButton.disabled = true;
        if ("value" in submitButton) submitButton.value = "Submitting...";
        else submitButton.textContent = "Submitting...";
      }
      showFormMessage(form, "Submitting your appointment request…", false);

      try {
        const response = await fetch("/api/consultation", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok || result.success === false) {
          throw new Error(result.message || "Unable to submit your appointment request.");
        }
        const thankYouUrl = `${window.location.pathname.replace(/\/$/, "")}/thank-you.html`;
        window.location.assign(thankYouUrl);
      } catch (error) {
        showFormMessage(
          form,
          error instanceof Error ? error.message : "Unable to submit your appointment request.",
          true,
        );
        if (submitButton) {
          submitButton.disabled = false;
          if ("value" in submitButton) submitButton.value = originalLabel || "Submit";
          else submitButton.textContent = originalLabel || "Submit";
        }
      }
    },
    true,
  );
})();
