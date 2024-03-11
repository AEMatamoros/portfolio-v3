export interface iState {
    theme: string;
    contactForm: boolean;
    currentLanguaje: string;
    showContactForm: () => void;
    closeContactForm: () => void;
    updateTheme: (theme: string) => void;
    setCurrentLanguaje: (theme: string) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    esLabels: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    enLabels: any;
}
