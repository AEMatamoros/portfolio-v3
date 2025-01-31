import profile from '@Assets/img/profile.webp';
import useStore from '@/store/store';
import {
    selectEsLabels,
    selectEnLabels,
    selectCurrentLanguaje,
} from '@/store/selectors';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export function About() {
    const languaje = useStore(selectCurrentLanguaje);
    const ES = useStore(selectEsLabels);
    const EN = useStore(selectEnLabels);
    return (
        <section className="items-left m-auto flex min-h-[100vh] w-10/12 flex-col justify-center py-4 md:w-8/12">
            <h2 className="my-4 text-5xl font-semibold text-darksecondary dark:text-secondary">
                {languaje === 'ES' ? ES.mainTitle : EN.mainTitle}
            </h2>
            <div className="about___body flex flex-wrap">
                <div className="about__description w-full lg:w-6/12">
                    <p className="my-4 text-center text-base font-normal text-gray-500 dark:text-gray-400 md:text-left">
                        {languaje === 'ES' ? ES.mainMsg : EN.mainMsg}
                    </p>
                    <article className="text-primary dark:text-darkprimary">
                        {languaje === 'ES' ? ES.tecsResume : EN.tecsResume}
                        <ul>
                            <li className="tecs__resume dark:text-darksdetail p-2 text-secondary">
                                Javascript
                            </li>
                            <li className="tecs__resume dark:text-darksdetail p-2 text-secondary">
                                Typescript
                            </li>
                            <li className="tecs__resume dark:text-darksdetail p-2 text-secondary">
                                React
                            </li>
                            <li className="tecs__resume dark:text-darksdetail p-2 text-secondary">
                                NodeJS
                            </li>
                        </ul>
                    </article>
                </div>
                <div className="about__description flex w-full justify-center px-0 py-2 lg:w-6/12 lg:p-4">
                    <LazyLoadImage
                        src={profile}
                        alt="Profile Picture"
                        className="about__profile w-10/12"
                        width="400"
                        height="400"
                    />
                </div>
            </div>
        </section>
    );
}
