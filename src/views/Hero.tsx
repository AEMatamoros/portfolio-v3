import SquaresEffect from '../components/shared/SquareEffect';
import useStore from '@/store/store';
import {
    selectEsLabels,
    selectTheme,
    selectEnLabels,
    selectCurrentLanguaje,
} from '@/store/selectors';
import { Timeline } from '@Components/index';
import { About } from '../components/shared/About';

export function Hero() {
    const currentTheme = useStore(selectTheme);
    const languaje = useStore(selectCurrentLanguaje);
    const ES = useStore(selectEsLabels);
    const EN = useStore(selectEnLabels);

    return (
        <>
            <section className="items-left r m-auto flex min-h-[100vh] w-10/12 flex-col justify-center py-4 md:w-8/12">
                <span className="hero__subtitle third-text-animation text-center text-6xl font-semibold text-secondary dark:text-darksecondary">
                    {languaje === 'ES' ? ES.userJob : EN.userJob}
                </span>
                <h1 className="hero__title first-text-animation text-center font-bold text-primary dark:text-darkprimary">
                    Alexis Matamoros.
                </h1>
                <span className="hero__description second-text-animation   text-center text-3xl text-detail dark:text-darkdetail">
                    {languaje === 'ES' ? ES.mainHero : EN.mainHero}
                </span>
                <SquaresEffect currentTheme={currentTheme}></SquaresEffect>
            </section>
            <About></About>
            <Timeline></Timeline>
        </>
    );
}
