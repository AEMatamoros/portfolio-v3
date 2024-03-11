import { iState } from '../interfaces/store';

export const selectTheme = (state: iState) => state.theme;
export const selectContactFormState = (state: iState) => state.contactForm;
export const selectUpdateTheme = (state: iState) => state.updateTheme;
export const selecShowContactForm = (state: iState) => state.showContactForm;
export const selectCloseContactForm = (state: iState) => state.closeContactForm;
export const selectEsLabels = (state: iState) => state.esLabels;
export const selectEnLabels = (state: iState) => state.enLabels;
export const selectCurrentLanguaje = (state: iState) => state.currentLanguaje;
export const selectSetCurrentLanguaje = (state: iState) =>
    state.setCurrentLanguaje;
