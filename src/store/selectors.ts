import { iState } from '../interfaces/store';

export const selectTheme = (state: iState) => state.theme;
export const selectContactFormState = (state: iState) => state.contactForm;
export const selectUpdateTheme = (state: iState) => state.updateTheme;
export const selecShowContactForm = (state: iState) => state.showContactForm;
export const selectCloseContactForm = (state: iState) => state.closeContactForm;
