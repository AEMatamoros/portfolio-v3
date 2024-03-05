import SquaresEffect from '../components/shared/SquareEffect';
import useStore from '@/store/store';
import { selectTheme } from '@/store/selectors';
import { Timeline } from '@Components/index';
import { About } from '../components/shared/About';

export function Hero() {
    const currentTheme = useStore(selectTheme);

    return (
        <>
            <section className="items-left r m-auto flex min-h-[100vh] w-10/12 flex-col justify-center py-4 md:w-8/12">
                <span className="hero__subtitle text-center text-6xl font-semibold text-secondary dark:text-darksecondary">
                    Desarrollador Web
                </span>
                <h1 className="hero__title text-center font-bold text-primary dark:text-darkprimary">
                    Alexis Matamoros.
                </h1>
                <span className="hero__description text-center text-3xl  text-detail dark:text-darkdetail">
                    Bienvenido a mi portfolio...
                </span>
                <SquaresEffect currentTheme={currentTheme}></SquaresEffect>
            </section>
            <About></About>
            <Timeline></Timeline>
        </>
    );
}
