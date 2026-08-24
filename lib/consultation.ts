export type ConsultationPayload = {
  name: string;
  phone: string;
  email: string;
  clinicSlug?: string;
  preferredDate?: string;
  message?: string;
  captchaToken?: string;
  source: string;
};

export type ConsultationResult = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

async function parseConsultationResponse(response: Response): Promise<ConsultationResult> {
  const data = await response.json();
  return {
    success: Boolean(data.success),
    message: data.message || (data.success ? "Request submitted successfully" : "Something went wrong"),
    errors: data.errors,
  };
}

export async function submitConsultation(payload: ConsultationPayload): Promise<ConsultationResult> {
  try {
    const response = await fetch("/api/consultation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return await parseConsultationResponse(response);
  } catch {
    return { success: false, message: "Unable to submit right now. Please try again." };
  }
}

/**
 * For forms that include a file upload (e.g. X-ray/records). Pass a
 * FormData built from the form element — do not set Content-Type
 * yourself, the browser needs to add the multipart boundary.
 */
export async function submitConsultationForm(formData: FormData): Promise<ConsultationResult> {
  try {
    const response = await fetch("/api/consultation", {
      method: "POST",
      body: formData,
    });
    return await parseConsultationResponse(response);
  } catch {
    return { success: false, message: "Unable to submit right now. Please try again." };
  }
}
