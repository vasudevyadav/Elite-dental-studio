export const BIGIN_FORM_SCRIPTS = {
  section: "https://in.bigin.online/org60035126201/forms/book-an-appointment?script=$sYG",
  popup: "https://in.bigin.online/org60035126201/forms/book-an-appointment?script=$sYG",
} as const;

export default function BiginAppointmentWidget({
  variant = "section",
  className,
  hideTitle = false,
}: {
  variant?: keyof typeof BIGIN_FORM_SCRIPTS;
  className?: string;
  hideTitle?: boolean;
}) {
  const title = variant === "popup" ? "Book an appointment form" : "Appointment request form";
  const compact = variant === "popup";
  const formOverrides = `
    html,body{height:auto!important;min-height:0!important;background:#fff!important;overflow-x:hidden!important}
    .wf-parent{height:auto!important;min-height:0!important;padding:0!important;overflow:visible!important;background:#fff!important}
    .wf-wrapper{width:100%!important;max-width:none!important;margin:0!important;border:0!important;border-radius:0!important;box-shadow:none!important}
    .wf-form-component{padding:${compact ? "10px 8px 20px" : "16px 18px 24px"}!important}
    .wf-header{display:${compact || hideTitle ? "none" : "block"}!important;padding-bottom:${compact || hideTitle ? "0" : "18px"}!important;font-size:${compact ? "20px" : "24px"}!important;line-height:1.2!important}
    .wf-label{display:none!important}
    .wf-row{margin-bottom:${compact ? "10px" : "14px"}!important}
    .wf-field-item,.date-input-container{min-height:${compact ? "42px" : "48px"}!important;border-color:#bdc8d3!important;border-radius:6px!important;font-size:${compact ? "13px" : "15px"}!important}
    .wf-field-input,.wf-field-dropdown{padding:${compact ? "9px 11px" : "12px 14px"}!important}
    .dropdown-contents::after{display:none!important}
    .wf-field-item-date.custom-date-converted-field{min-height:0!important;padding:5px 0!important}
    .wf-row,.wf-field,.wf-field-inner,.date-input-container{overflow:visible!important}
    .wf-calendar-popup-wrapper{position:fixed!important;top:8px!important;right:auto!important;bottom:auto!important;left:50%!important;width:max-content!important;max-width:calc(100% - 16px)!important;transform:translateX(-50%)!important;z-index:10000!important}
    .wf-row:has([name="CONTACTCF2"]){display:none!important}
    .wform-btn-wrap{justify-content:flex-start!important;margin-top:${compact ? "14px" : "20px"}!important}
    .wf-btn{min-height:${compact ? "40px" : "46px"}!important;padding:${compact ? "8px 18px" : "10px 24px"}!important;font-size:${compact ? "14px" : "15px"}!important}
  `;
  const srcDoc = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>html,body{margin:0;min-height:100%;background:#fff}body{overflow-x:hidden}</style>
  </head>
  <body>
    <script src="${BIGIN_FORM_SCRIPTS[variant]}"></script>
    <style>${formOverrides}</style>
    <script>
      (function () {
        function prepareForm() {
          var placeholders = {
            "First Name": "First Name",
            "Last Name": "Last Name",
            "Email": "Email Address",
            "Mobile": "Mobile No."
          };
          Object.keys(placeholders).forEach(function (name) {
            var input = document.querySelector('input[name="' + name + '"]');
            if (input && input.placeholder !== placeholders[name]) {
              input.placeholder = placeholders[name];
            }
          });
          var clinic = document.querySelector('select[name="CONTACTCF1"]');
          if (clinic && clinic.options.length && clinic.options[0].text !== "-Select Clinic-") {
            clinic.options[0].text = "-Select Clinic-";
          }
          var returnUrl = document.querySelector('input[name="returnURL"]');
          if (returnUrl) {
            returnUrl.value = window.parent.location.origin + "/thank-you";
          }
          var form = document.querySelector("form");
          if (form) {
            form.target = "_top";
          }
        }
        prepareForm();
        var observer = new MutationObserver(prepareForm);
        observer.observe(document.body, { childList: true, subtree: true });
        window.setTimeout(function () { observer.disconnect(); prepareForm(); }, 5000);
      })();
    </script>
  </body>
</html>`;

  return (
    <div className={`w-full overflow-hidden rounded-xl bg-white ${className || ""}`}>
      <iframe
        title={title}
        srcDoc={srcDoc}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        className={`block w-full border-0 bg-white ${variant === "popup" ? "h-[400px]" : hideTitle ? "h-[470px]" : "h-[530px]"}`}
      />
    </div>
  );
}
