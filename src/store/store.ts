import { create } from 'zustand';
import zustymiddlewarets from 'zustymiddlewarets';
import { iState } from '../interfaces/store';
import { ENlabels, ESlabels } from '@/languajes/index';

const useStore = create<iState>()(
    zustymiddlewarets(set => ({
        theme: 'dark',
        updateTheme: (theme: string) => set({ theme }),
        contactForm: false,
        currentLanguaje: 'ES',
        esLabels: ESlabels,
        enLabels: ENlabels,
        closeContactForm: () => set({ contactForm: false }),
        showContactForm: () => set({ contactForm: true }),
        setCurrentLanguaje: (currentLanguaje: string) =>
            set({ currentLanguaje }),
    })),
);

declare global {
    interface Window {
        store: typeof useStore;
    }
}

window.store = useStore;
export default useStore;
