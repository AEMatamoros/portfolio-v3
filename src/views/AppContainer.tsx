import { Navbar } from '@Components/index';
import { Outlet } from 'react-router-dom';

export default function AppContainer() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}
