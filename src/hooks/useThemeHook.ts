import { selectTheme, selectUpdateTheme } from '@/store/selectors';
import useStore from '@/store/store';

export default function useThemeHook() {
    const currentTheme = useStore(selectTheme);
    const stateHandleTheme = useStore(selectUpdateTheme);

    const handleTheme = () => {
        stateHandleTheme(currentTheme == 'light' ? 'dark' : 'light');
    };

    return {
        handleTheme,
        currentTheme,
    };
}
