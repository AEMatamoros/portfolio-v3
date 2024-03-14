import { Lamp, Navbar } from '@Components/index';
import { Outlet } from 'react-router-dom';
import { GoTop } from '@Components/index';
import Footer from '@Components/shared/Footer';
import useStore from '@/store/store';
import { selectTheme } from '@/store/selectors';
import useLamp from '@Hooks/useLamp';
export default function AppContainer() {
    useLamp();
    const theme = useStore(selectTheme);

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <GoTop state={true} />
            {theme === 'dark' && <Lamp />}
        </>
    );
}
