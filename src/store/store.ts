import { create } from 'zustand';
import zustymiddlewarets from 'zustymiddlewarets';
import { iState } from '../interfaces/store';

const useStore = create<iState>()(
    zustymiddlewarets(set => ({
        theme: 'dark',
        updateTheme: (theme: string) => set({ theme }),
        contactForm: false,
        showContactForm: () => set({ contactForm: true }),
        closeContactForm: () => set({ contactForm: false }),
    })),
);

declare global {
    interface Window {
        store: typeof useStore;
    }
}

window.store = useStore;
export default useStore;
