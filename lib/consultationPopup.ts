export const OPEN_CONSULTATION_POPUP_EVENT = "open-consultation-popup";

export function openConsultationPopup() {
  window.dispatchEvent(new Event(OPEN_CONSULTATION_POPUP_EVENT));
}
