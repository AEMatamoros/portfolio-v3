import useThemeHook from '@Hooks/useThemeHook';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@Components/index';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useStore from '@/store/store';
import { selecShowContactForm } from '@/store/selectors';

export default function Navbar() {
    //Theme
    const { currentTheme, handleTheme } = useThemeHook();
    const [scroll, setScroll] = useState(false);

    //Navbar Effect on scroll
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    // Open Contact
    const handleContactformShow = useStore(selecShowContactForm);

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <header
            className={`fixed top-0 z-10 ${showMobileMenu ? 'max-h-[100vh]' : 'max-h-[20vh]'}  w-full max-w-full overflow-hidden ${scroll ? 'bg-lighttransparency dark:bg-darktransparency' : 'bg-light dark:bg-dark'}`}
        >
            <nav className="relative z-30 border-gray-200 p-2 ">
                <div className="mx-auto flex w-11/12 flex-wrap items-center justify-between">
                    <span
                        onClick={handleTheme}
                        className="text-lightprimary dark:text-dark-primary cursor-pointer text-2xl font-bold text-primary"
                    >
                        <span>AM</span>
                    </span>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="dark:hover:dark-detail inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-detail focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-darkdetail dark:focus:ring-gray-600 md:hidden"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                            onClick={() => {
                                setShowMobileMenu(!showMobileMenu);
                            }}
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        className="hidden w-full md:block md:w-auto"
                        id="navbar-default"
                    >
                        <ul className="mt-4 flex flex-col items-center rounded-lg border border-gray-100  p-4 font-medium text-detail dark:border-gray-700  dark:text-darkprimary md:mt-0 md:flex-row md:space-x-8 md:border-0 rtl:space-x-reverse">
                            <li>
                                <NavLink
                                    to={'/'}
                                    className="flex transform cursor-pointer items-center hover:scale-105 hover:text-detail dark:hover:text-darkdetail"
                                >
                                    <span className="p-1 text-detail dark:text-darkdetail">
                                        01.
                                    </span>
                                    Inicio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/tecs'}
                                    className="flex transform cursor-pointer items-center hover:scale-105 hover:text-detail dark:hover:text-darkdetail"
                                >
                                    <span className="p-1 text-detail dark:text-darkdetail">
                                        02.
                                    </span>
                                    Tecnologias
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/proyects'}
                                    className="flex transform cursor-pointer items-center hover:scale-105 hover:text-detail dark:hover:text-darkdetail"
                                >
                                    <span className="p-1 text-detail dark:text-darkdetail">
                                        03.
                                    </span>
                                    Proyectos
                                </NavLink>
                            </li>
                            <li>
                                <button
                                    className="flex transform cursor-pointer items-center hover:scale-105 hover:text-detail dark:hover:text-darkdetail"
                                    onClick={handleContactformShow}
                                >
                                    <span className="p-1 text-detail dark:text-darkdetail">
                                        04.
                                    </span>
                                    Contacto
                                </button>
                            </li>
                            <li>
                                {currentTheme === 'light' ? (
                                    <FontAwesomeIcon
                                        icon={faSun}
                                        className="cursor-pointer hover:scale-105 hover:text-detail dark:hover:text-darkdetail"
                                        onClick={handleTheme}
                                    />
                                ) : (
                                    <FontAwesomeIcon
                                        icon={faMoon}
                                        className="cursor-pointer hover:scale-105 hover:text-detail dark:hover:text-darkdetail"
                                        onClick={handleTheme}
                                    />
                                )}
                            </li>
                            <li>
                                <Button
                                    text="Idioma"
                                    onClick={() => {}}
                                ></Button>
                            </li>
                            <li>
                                <Button text="CV" onClick={() => {}}></Button>
                            </li>
                        </ul>
                    </div>
                    {showMobileMenu && (
                        <div className=" block min-h-[100vh] w-full bg-transparent md:hidden">
                            <ul className="mt-4 flex flex-col items-center justify-center gap-4 rounded-lg  p-4 font-medium text-detail dark:border-gray-700  dark:text-darkprimary md:mt-0 md:flex-row md:space-x-8 md:border-0 rtl:space-x-reverse">
                                <li>
                                    <NavLink
                                        to={'/'}
                                        className="flex transform cursor-pointer items-center hover:scale-105 hover:text-detail dark:hover:text-darkdetail"
                                    >
                                        <span className="p-1 text-detail dark:text-darkdetail">
                                            01.
                                        </span>
                                        Inicio
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={'/tecs'}
                                        className="flex transform cursor-pointer items-center hover:scale-105 hover:text-detail dark:hover:text-darkdetail"
                                    >
                                        <span className="p-1 text-detail dark:text-darkdetail">
                                            02.
                                        </span>
                                        Tecnologias
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={'/proyects'}
                                        className="flex transform cursor-pointer items-center hover:scale-105 hover:text-detail dark:hover:text-darkdetail"
                                    >
                                        <span className="p-1 text-detail dark:text-darkdetail">
                                            03.
                                        </span>
                                        Proyectos
                                    </NavLink>
                                </li>
                                <li>
                                    <button
                                        className="flex transform cursor-pointer items-center hover:scale-105 hover:text-detail dark:hover:text-darkdetail"
                                        onClick={handleContactformShow}
                                    >
                                        <span className="p-1 text-detail dark:text-darkdetail">
                                            04.
                                        </span>
                                        Contacto
                                    </button>
                                </li>
                                <li>
                                    {currentTheme === 'light' ? (
                                        <FontAwesomeIcon
                                            icon={faSun}
                                            className="cursor-pointer hover:scale-105 hover:text-detail dark:hover:text-darkdetail"
                                            onClick={handleTheme}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faMoon}
                                            className="cursor-pointer hover:scale-105 hover:text-detail dark:hover:text-darkdetail"
                                            onClick={handleTheme}
                                        />
                                    )}
                                </li>
                                <li>
                                    <Button
                                        text="Idioma"
                                        onClick={() => {}}
                                    ></Button>
                                </li>
                                <li>
                                    <Button
                                        text="CV"
                                        onClick={() => {}}
                                    ></Button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
            <div
                className={`absolute top-0 z-20  w-full blur ${showMobileMenu ? 'min-h-[100vh]' : 'min-h-[200px]'}`}
            ></div>
        </header>
    );
}
