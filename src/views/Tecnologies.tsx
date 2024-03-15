import useStore from '@/store/store';
import {
    selectEsLabels,
    selectEnLabels,
    selectCurrentLanguaje,
} from '@/store/selectors';
import { useDragAndDrop } from '@formkit/drag-and-drop/react';

import { TECHS } from '@Constants/TECHS';

export function Tecnologies() {
    const languaje = useStore(selectCurrentLanguaje);
    const ES = useStore(selectEsLabels);
    const EN = useStore(selectEnLabels);
    const [parent, techsList] = useDragAndDrop<HTMLUListElement, any>(TECHS);

    return (
        <section className="m-auto flex min-h-[100vh] w-10/12 flex-col items-center justify-center py-4 md:w-8/12">
            <h2 className="xs:my-4 my-20 text-5xl font-semibold text-secondary dark:text-secondary">
                {languaje === 'ES' ? ES.tecnologiesTitle : EN.tecnologiesTitle}
            </h2>
            <span className="text-primary dark:text-darkprimary">
                {languaje === 'ES' ? ES.tecsPrevius : EN.tecsPrevius}
            </span>
            <ul
                ref={parent}
                className="tech-container  main__about__icons flex w-full flex-wrap items-center justify-center gap-12 p-4 md:w-8/12"
            >
                {techsList.map((tec: any) => (
                    <li
                        data-label={tec}
                        key={tec.name}
                        className=" transform cursor-pointer hover:scale-105"
                        title={tec.name}
                    >
                        {tec.icon}
                    </li>
                ))}
            </ul>
        </section>
    );
}
