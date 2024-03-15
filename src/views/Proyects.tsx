import useStore from '@/store/store';
import { NavLink } from 'react-router-dom';
import { PROYECTS } from '@Constants/PROYECTS';
import { useState } from 'react';
import {
    selectEsLabels,
    selectEnLabels,
    selectCurrentLanguaje,
} from '@/store/selectors';

export function Proyects() {
    const languaje = useStore(selectCurrentLanguaje);
    const ES = useStore(selectEsLabels);
    const EN = useStore(selectEnLabels);
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = PROYECTS.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(PROYECTS.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <section className="m-auto flex min-h-[100vh] w-10/12 flex-col items-center justify-center py-4 md:w-8/12">
            <h2 className="xs:my-4 my-20 text-5xl font-semibold text-secondary dark:text-secondary">
            {languaje === 'ES' ? ES.proyectsTitle : EN.proyectsTitle}
            </h2>
            <div className="proyects__grid -mx-4  w-full">
                {currentItems.map((proyect: any) => (
                    <PortfolioCard
                        ImageHref={proyect.img}
                        title={proyect.name}
                        techs={proyect.techs}
                        key={proyect.name}
                        url={proyect.url}
                    ></PortfolioCard>
                ))}
            </div>
            <div className="flex items-center justify-center gap-4">
                {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1,
                ).map(page => (
                    <button
                        className={` ${
                            currentPage == page
                                ? 'bg-detail dark:bg-darkdetail'
                                : 'dark:bg-dark-primary bg-primary'
                        } h-10  w-10 p-2 text-white hover:bg-green-500`}
                        key={page}
                        onClick={() => handlePageChange(page)}
                        title={`${page}`}
                    >
                        {page}
                    </button>
                ))}
            </div>
        </section>
    );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PortfolioCard = ({ ImageHref, title, techs, url }: any) => {
    return (
        <>
            <div className={`proyects__card w-4/12 px-4`}>
                <div className="relative z-0 mb-12">
                    <div className="overflow-hidden rounded-[10px]">
                        <img
                            src={ImageHref}
                            alt="portfolio"
                            className="w-full"
                        />
                    </div>
                    <div className="shadow-portfolio dark:shadow-box-dark relative z-10 mx-7 -mt-10 rounded-lg bg-primary p-4 text-center dark:bg-darkprimary">
                        <h3 className="mb-5 text-xl font-bold text-dark dark:text-white">
                            {title}
                        </h3>
                        <ul className="dark:text-dark-primary mb-2  flex justify-center gap-2 text-sm font-semibold text-primary">
                            {techs.map((tec: string, index: string) => (
                                <li
                                    key={index}
                                    className="bg-light p-1 dark:bg-dark"
                                >
                                    {tec}
                                </li>
                            ))}
                        </ul>
                        <NavLink
                            to={url}
                            className="text-body-color dark:text-dark-6 border-stroke dark:border-dark-3 inline-block rounded-md border px-7 py-[10px] text-sm font-medium text-white transition hover:border-detail hover:bg-detail dark:border-darkdetail dark:hover:bg-darkdetail"
                            target="_blank"
                        >
                            Mas
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};
