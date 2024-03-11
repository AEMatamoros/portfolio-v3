import { Navbar } from '@Components/index';
import { Outlet } from 'react-router-dom';
import { GoTop } from '@Components/index';
import Footer from '@Components/shared/Footer';
export default function AppContainer() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <GoTop state={true} />
        </>
    );
}
