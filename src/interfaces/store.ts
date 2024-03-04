export interface iState {
    theme: string;
    updateTheme: (theme: string) => void;
    contactForm: boolean;
    showContactForm: () => void;
    closeContactForm: () => void;
}
