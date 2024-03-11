import { scrollToTop } from '@Utils/scrollTop';
import { faArrowUpShortWide } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

export default function GoTop({ state }: { state: boolean }) {
    const [scroll, setScroll] = useState(false);

    //Navbar Effect on scroll
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 300 ? true : false);
        });
    }, []);
    return (
        <>
            {scroll && (
                <FontAwesomeIcon
                    onClick={scrollToTop}
                    className={`goTop ${!state && 'move'} fixed bottom-4 right-4 h-8 w-8 cursor-pointer text-detail hover:text-primary dark:text-darkdetail dark:hover:text-darkprimary`}
                    icon={faArrowUpShortWide}
                ></FontAwesomeIcon>
            )}
        </>
    );
}
