import useThemeHook from '@Hooks/useThemeHook';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@Components/index';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const { currentTheme, handleTheme } = useThemeHook();
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    return (
        <header
            className={`fixed top-0 z-10 w-full max-w-full   py-6  ${scroll ? 'bg-lighttransparency dark:bg-darktransparency' : 'bg-light dark:bg-dark'}`}
        >
            <nav className=" flex w-full  items-center px-6 font-semibold text-detail dark:text-darkprimary">
                <span
                    onClick={handleTheme}
                    className="text-lightprimary cursor-pointer text-2xl"
                >
                    <span>AM</span>
                </span>
                <ul className="ml-auto flex w-10/12 items-center justify-around gap-2 text-sm lg:w-8/12 xl:w-4/12">
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
                    {/* <li>
                        <NavLink
                            to={'/about'}
                            className="flex transform cursor-pointer items-center hover:scale-105 hover:text-detail dark:hover:text-darkdetail"
                        >
                            <span className="p-1 text-detail dark:text-darkdetail">
                                02.
                            </span>
                            Sobre
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/experience'}
                            className="flex transform cursor-pointer items-center hover:scale-105 hover:text-detail dark:hover:text-darkdetail"
                        >
                            <span className="p-1 text-detail dark:text-darkdetail">
                                03.
                            </span>
                            Experiencia
                        </NavLink>
                    </li> */}
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
                        <NavLink
                            to={'/proyects'}
                            className="flex transform cursor-pointer items-center hover:scale-105 hover:text-detail dark:hover:text-darkdetail"
                        >
                            <span className="p-1 text-detail dark:text-darkdetail">
                                04.
                            </span>
                            Contacto
                        </NavLink>
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
                        <Button text="Idioma" onClick={() => {}}></Button>
                    </li>
                    <li>
                        <Button text="CV" onClick={() => {}}></Button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
