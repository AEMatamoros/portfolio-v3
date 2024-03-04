import profile from '@Assets/img/profile.jpg';
export function About() {
    return (
        <section className="items-left m-auto flex min-h-[100vh] w-10/12 flex-col justify-center md:w-8/12 ">
            <h2 className="my-4 text-5xl font-semibold text-secondary dark:text-secondary">
                Sobre mi
            </h2>
            <div className="about___body flex flex-wrap">
                <div className="about__description w-full lg:w-6/12">
                    <p className="my-4 text-justify text-base font-normal text-gray-500 dark:text-gray-400">
                        Soy Ingeniero en Sistemas, mis habilidades están
                        enfocadas en el desarrollo de aplicaciones web con
                        conocimientos sobre tecnologías de Backend, Frontend y
                        sistemas de bases de datos SQL/NOSQL, además poseo muy
                        buenas habilidades blandas , como buena capacidad de
                        intercomunicación, trabajo en equipo, organización,
                        creatividad y además me adapto fácilmente a cualquier
                        situación o trabajo.
                    </p>
                    <article className="text-primary dark:text-darkprimary">
                        Listado de tecnologias utilizadas recientemente:
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
                    <img
                        src={profile}
                        alt="Profile Picture"
                        className="about__profile w-10/12"
                    />
                </div>
            </div>
        </section>
    );
}
