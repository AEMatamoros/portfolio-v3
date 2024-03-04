import { create } from 'zustand';
import zustymiddlewarets from 'zustymiddlewarets';
import { iState } from '../interfaces/store';

const useStore = create<iState>()(
    zustymiddlewarets(set => ({
        theme: 'dark',
        updateTheme: (theme: string) => set({ theme }),
    })),
);

declare global {
    interface Window {
        store: typeof useStore;
    }
}

window.store = useStore;
export default useStore;
