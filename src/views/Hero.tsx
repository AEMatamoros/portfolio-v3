import SquaresEffect from '../components/shared/SquareEffect';
import useStore from '@/store/store';
import { selectTheme } from '@/store/selectors';
import { Timeline } from '@Components/index';
import { About } from '../components/shared/About';

export function Hero() {
    const currentTheme = useStore(selectTheme);

    return (
        <>
            <section className="flex min-h-[100vh] flex-col items-center justify-center font-bold text-detail dark:text-darkdetail">
                <span className="text-center text-6xl text-secondary dark:text-darksecondary">
                    Desarrollador Web
                </span>
                <h1 className="hero__title text-center text-primary dark:text-darkprimary">
                    Alexis Matamoros.
                </h1>
                <span className=" text-center text-3xl text-detail dark:text-darkdetail">
                    Bienvenido a mi portolio...
                </span>
                <SquaresEffect currentTheme={currentTheme}></SquaresEffect>
            </section>
            <About></About>
            <Timeline></Timeline>
        </>
    );
}
