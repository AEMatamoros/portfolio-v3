import useStore from '@/store/store';
import {
    selectEsLabels,
    selectEnLabels,
    selectCurrentLanguaje,
} from '@/store/selectors';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { PROYECTS } from '@Constants/PROYECTS';
import { NavLink } from 'react-router-dom';

const PortfolioItem = ({
    techs,
    name,
    img,
    url,
}: {
    techs: string[];
    name: string;
    img: string;
    url: string;
}) => {
    return (
        <NavLink to={url}>
            <div className="flex grow flex-col justify-center whitespace-nowrap border border-solid border-gray-700 p-4 max-md:max-w-full">
                <h3 className="relative  text-xl font-extrabold leading-tight text-secondary dark:text-darksecondary">
                    {name}
                </h3>
                <div className="relative flex min-h-[200px] flex-col items-start px-12 pb-12 pt-96 max-md:max-w-full max-md:px-5 max-md:pt-24">
                    <LazyLoadImage
                        src={img}
                        alt={name}
                        className="absolute inset-0 size-full object-cover"
                    />
                    <div className="absolute bottom-2 flex flex-wrap gap-2 rounded-2xl px-4 py-1 text-base leading-8 text-orange-950">
                        {techs.map(tec => (
                            <span key={tec} className="bg-white p-2 text-sm">
                                {tec}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export function Proyect() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = PROYECTS.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(PROYECTS.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    const languaje = useStore(selectCurrentLanguaje);
    const ES = useStore(selectEsLabels);
    const EN = useStore(selectEnLabels);
    return (
        <section className="items-left m-auto flex min-h-[100vh] w-10/12 flex-col justify-center py-4 md:w-8/12">
            <h2 className="my-4 text-5xl font-semibold text-secondary dark:text-secondary">
                {languaje === 'ES' ? ES.proyectsTitle : EN.proyectsTitle}
            </h2>
            <div className="about___body flex flex-wrap">
                <div className="m-auto mt-16 w-full max-w-[1280px]">
                    <div className="flex flex-wrap max-md:flex-col">
                        {currentItems.map((item, index) => (
                            <div
                                key={index}
                                className="flex w-[33%] flex-col p-2 max-md:ml-0 max-md:w-full"
                            >
                                <PortfolioItem {...item} />
                            </div>
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
                                        : 'bg-primary dark:bg-darkprimary'
                                } h-10  w-10 p-2 text-white hover:bg-green-500`}
                                key={page}
                                onClick={() => handlePageChange(page)}
                                title={`${page}`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
