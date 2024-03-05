import formatDate from '@Utils/date';
export const EXPERIENCE = [
    {
        name: 'GoIt GLobal',
        descriptionEN: 'Programing Teacher - FullStack',
        descriptionES: 'Maestro de programacion - FullStack',
        time: 'December 31, 2022 23:59:59',
        tecs: ['HTML', 'CSS', 'REACT', 'NodeJS', 'Figma'],
        positionDescripcionES: `
        Como maestro de desarrollo frontend, comparto con mis estudiantes mi profundo conocimiento del stack MERN. Me especializo en MongoDB para estructurar bases de datos, Express para crear servidores, React para interfaces de usuario dinámicas y Node.js para ejecutar el servidor. Mi misión es capacitar a los aspirantes a desarrolladores para que creen aplicaciones web y móviles con estas tecnologías líderes de la industria. Creo que enseñar no solo consiste en impartir conocimientos, sino en inspirar a los estudiantes a abrazar la creatividad y la resolución de problemas, habilidades esenciales para triunfar en el desarrollo frontend.`,
        current: true,
    },
    {
        name: 'Informatica Atlantida',
        descriptionEN: 'Sr.Front-End Developer',
        descriptionES: 'Desarrollador Sr.Front-End',
        time: 'June 6, 2022 23:59:59',
        tecs: ['UI5', 'Figma', 'Angular', 'React'],
        positionDescripcionES: `
        Creación de
        interfaces de usuario atractivas y funcionales para aplicaciones
        web . Diriges equipos, trabajas en colaboración con diseñadores
        y desarrolladores, y participas en la toma de decisiones técnicas.  Responsable de mantener los estándares de calidad del código, 
        optimizar el rendimiento y la accesibilidad, y estar al tanto de las
        tendencias y mejores prácticas en el desarrollo frontend.`,
        current: true,
    },
    {
        name: 'Impact Mobile',
        descriptionEN: 'Web Developer',
        descriptionES: 'Desarrollador web',
        time: 'April 22, 2021 23:59:59',
        timeEnd: 'April 22, 2022 23:59:59',
        tecs: ['REACT', 'Angular', 'Python', 'NodeJS', 'Django'],
        positionDescripcionES: `Como desarrollador de soluciones de software para el comercio electrónico, tu trabajo es crear plataformas digitales robustas y atractivas que permitan a los clientes comprar productos y servicios de manera segura y fácil. Usas tecnologías de vanguardia para diseñar interfaces intuitivas y escalables que optimicen la experiencia del usuario. También te encargas de la seguridad, el rendimiento y la integración de herramientas de análisis para mejorar continuamente el rendimiento del comercio electrónico.`,
        current: false,
    },
    {
        name: 'FreeLancer',
        descriptionEN: 'Autonomous',
        descriptionES: 'Autónomo',
        time: 'March 22, 2020 23:59:59',
        timeEnd: 'March 22, 2021 23:59:59',
        tecs: ['Mutltiples Stacks'],
        positionDescripcionES: `
        Como freelancer especializado en crear APIs con Python, mi labor se centra en desarrollar soluciones eficientes y escalables para mis clientes. Utilizo Python para construir interfaces de programación de aplicaciones (APIs) que facilitan la comunicación entre diferentes sistemas y aplicaciones. Me enorgullece ayudar a mis clientes a mejorar la eficiencia y la productividad de sus operaciones mediante el uso de tecnologías de vanguardia y prácticas de desarrollo de software ágiles. Mi objetivo es proporcionar a mis clientes un servicio de alta calidad que cumpla con sus necesidades y expectativas.`,
        current: false,
    },
];

export default function TImeline() {
    return (
        <section className="items-left m-auto flex min-h-[100vh] w-10/12 flex-col justify-center py-4 md:w-8/12">
            <h2 className="my-4 text-5xl font-semibold text-secondary dark:text-secondary">
                Experiencia
            </h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {EXPERIENCE.map((place, id) => (
                    <li className="mb-10 ms-4" key={id}>
                        <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            {formatDate(
                                place.time,
                                place.timeEnd ? place.timeEnd : '',
                                'ES',
                            )}
                            {place.current && (
                                <span className="px-4 text-detail dark:text-darkdetail">
                                    Actualidad
                                </span>
                            )}
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {place.name} |{' '}
                            <span className="text-primary dark:text-darkprimary">
                                {place.descriptionES}
                            </span>
                        </h3>
                        <p className="text-justify text-base font-normal text-gray-500 dark:text-gray-400">
                            {place.positionDescripcionES}
                        </p>
                    </li>
                ))}
            </ol>
        </section>
    );
}
