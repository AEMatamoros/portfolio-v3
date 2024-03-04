import { NavLink } from 'react-router-dom';
import AgendaIMG from '@Assets/img/portfolio/agenda.jpg';
import PhoenixStoreIMG from '@Assets/img/portfolio/phoenixstore.jpg';
import QrIMG from '@Assets/img/portfolio/qr.jpg';
import LecoIMG from '@Assets/img/portfolio/leco.jpg';
import WeatherImg from '@Assets/img/portfolio/weather.jpg';
import ExpenceFrontIMG from '@Assets/img/portfolio/expencefront.jpg';
import ExpenceBackIMG from '@Assets/img/portfolio/expenceback.jpg';
import CalendarIMG from '@Assets/img/portfolio/calendar.jpg';
import CalendarBIMG from '@Assets/img/portfolio/calendarb.jpg';
import PortalImg from '@Assets/img/portfolio/portal.jpg';
import FUTVIMG from '@Assets/img/portfolio/futv.jpg';
import Barber from '@Assets/img/portfolio/barber.jpg';
import NoImg from '@Assets/img/portfolio/noimg.jpg';
export const PROYECTS = [
    {
        hoverColor: 'text-gray-500',
        name: 'FUTV - CMS',
        descriptionES:
            'Plataforma de entretenimiento, blogs live streaming, se desarrollo tanto el client side, como el panel de adminsitracion de contenido',
        descriptionEN: 'Entertainment platform.',
        img: FUTVIMG,
        icon: 'fa-light fa-e',
        url: 'https://www.futvcr.com/',
        techs: ['Angular', 'NodeJS', 'Express', 'SQL'],
    },
    {
        hoverColor: 'text-gray-500',
        name: 'Goit - Mock',
        descriptionES: 'Proyecto Plantilla, para enseñar HTML, CSS(SASS).',
        descriptionEN: 'Template proyect to teach HTML and CSS(SASS).',
        img: Barber,
        icon: 'fa-light fa-e',
        url: 'https://aematamoros.github.io/FS-11/',
        techs: ['HTML', 'CSS', 'SASS'],
    },
    {
        hoverColor: 'text-gray-500',
        name: 'PTH',
        descriptionES:
            'Es una plataforma tecnológica gratuita, creada para facilitar a las personas el ejercicio del derecho de acceso a la información.',
        descriptionEN:
            'It is a free technological platform, created to make it easier for people to exercise the right of access to information.',
        img: PortalImg,
        icon: 'fa-light fa-e',
        url: 'https://portalunico.iaip.gob.hn/homeLanding',
        techs: ['React', 'Django', 'ElasticSearch'],
    },
    {
        hoverColor: 'text-gray-500',
        name: 'Phoenix Store',
        descriptionES:
            'Ecommerce, creado con la finalidad de venta de productos varios.',
        descriptionEN:
            'Ecommerce, created for the purpose of selling various products.',
        img: PhoenixStoreIMG,
        url: 'https://e-phoenixstoreunah.web.app/landing',
        techs: ['Angular', 'NodeJS', 'Express', 'SQL'],
    },
    {
        hoverColor: 'text-gray-500',
        name: 'Our Expences - Client',
        descriptionES: 'Aplicacion de manejo de despensa.',
        descriptionEN: 'Pantry management application.',
        img: ExpenceFrontIMG,
        icon: 'fa-light fa-e',
        url: 'https://github.com/AEMatamoros/our-expence',
        techs: ['React', 'TypeScript'],
    },
    {
        hoverColor: 'text-gray-500',
        name: 'Our Expences - API',
        descriptionES: 'Aplicacion de manejo de despensa.',
        descriptionEN: 'Pantry management application.',
        img: ExpenceBackIMG,
        icon: 'fa-light fa-e',
        url: 'https://github.com/AEMatamoros/our-expence',
        techs: ['NESTJS', 'MONGO', 'TypeScript'],
    },
    {
        hoverColor: 'text-gray-500',
        name: 'Calendar - Client',
        descriptionES: 'Calendario Virtual.Desarrollado en React.',
        descriptionEN: 'Virtual Calendar. Developed in React.',
        img: CalendarIMG,
        icon: 'fa-light fa-e',
        url: 'https://github.com/AEMatamoros/Calendar-Frontend',
        techs: ['React'],
    },
    {
        hoverColor: 'text-gray-500',
        name: 'Calendar - API',
        descriptionES: 'Calendario Virtual.Desarrollado en NODEJS, Express.',
        descriptionEN: 'Virtual Calendar.',
        img: CalendarBIMG,
        icon: 'fa-light fa-e',
        url: 'https://github.com/AEMatamoros/Calendar-API',
        techs: ['NODEJS', 'Express'],
    },
    {
        hoverColor: 'text-green-500',
        name: 'API Agenda',
        descriptionES:
            'Agenda virtual.Desarrollada con NodeJS, Express y el motor de plantillas Handlebars.',
        descriptionEN:
            'Virtual agenda.Developed with NodeJS, Express and the Handlebars template engine.',
        img: AgendaIMG,
        url: 'https://github.com/AEMatamoros/Agenda-API',
        techs: ['NodeJS', 'Express'],
    },
    {
        hoverColor: 'text-gray-500',
        name: 'QR Code Generator',
        descriptionES:
            'API para codificar una cadena como una imagen base 64 con un codigo QR, asi como encriptar y desencriptar la data dentro del mismo.Desarrollado en NODEJS, Express.',
        descriptionEN:
            'API to encode a string as a base 64 image with a QR code, as well as encrypt and decrypt the data within it. Developed on NODEJS, Express.',
        img: QrIMG,
        icon: 'fa-light fa-e',
        url: 'https://qrg-enerator-alpha.vercel.app/',
        techs: ['NodeJS', 'Express'],
    },
    {
        hoverColor: 'text-gray-500',
        name: "Pa'Ya",
        descriptionES:
            'Pagina de publicidad y venta de productos gratuita con manejo de perfiles de usuario.',
        descriptionEN:
            'Free advertising and product sales page with user profile management.',
        img: NoImg,
        icon: 'fa-light fa-e',
        url: 'https://github.com/AEMatamoros/PA-YA',
        techs: ['Python', 'Django'],
    },
    {
        hoverColor: 'text-gray-500',
        name: 'LECO(Learn to code)',
        descriptionES:
            'Aplicacion para aprender a programar de forma visual, y mostrando el codigo generado de salida como codigo de Python.',
        descriptionEN:
            'Application to learn to program visually, and showing the generated output code as Python code.',
        img: LecoIMG,
        icon: 'fa-light fa-e',
        url: 'https://github.com/AEMatamoros/PA-YA',
        techs: ['GoLang', 'Vue', 'DGraph'],
    },
    {
        hoverColor: 'text-gray-500',
        name: 'Consume Weather API',
        descriptionES:
            'Aplicacion que consume un API externa que brinda el clima respecto a la ubicacion actual o una ciudad.',
        descriptionEN:
            'Application that consumes an external API that provides the weather regarding the current location or a city.',
        img: WeatherImg,
        icon: 'fa-light fa-e',
        url: 'https://github.com/AEMatamoros/PA-YA',
        techs: ['React'],
    },
];
export function Proyects() {
    return (
        <section className="flex min-h-[100vh] flex-col items-center justify-center">
            <div className="proyects__grid -mx-4 mt-24  w-8/12">
                {PROYECTS.map((proyect: any) => (
                    <PortfolioCard
                        ImageHref={proyect.img}
                        title={proyect.name}
                        techs={proyect.techs}
                        key={proyect.name}
                        url={proyect.url}
                    ></PortfolioCard>
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
                <div className="relative mb-12">
                    <div className="overflow-hidden rounded-[10px]">
                        <img
                            src={ImageHref}
                            alt="portfolio"
                            className="w-full"
                        />
                    </div>
                    <div className="shadow-portfolio dark:shadow-box-dark relative z-10 mx-7 -mt-10 rounded-lg bg-darkprimary p-4 text-center dark:bg-detail">
                        <h3 className="mb-5 text-xl font-bold text-dark dark:text-white">
                            {title}
                        </h3>
                        <ul className="mb-2 flex  justify-center gap-2 text-sm font-semibold text-detail">
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
