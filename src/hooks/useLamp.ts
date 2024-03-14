import { useLayoutEffect } from 'react';

export default function useLamp() {
    useLayoutEffect(() => {
        const pos = document.documentElement;
        const handleMouseMove = (event: MouseEvent) => {
            pos.style.setProperty('--x', event.clientX + 'px');
            pos.style.setProperty('--y', event.clientY + 'px');
        };

        window.addEventListener('mousemove', e => {
            handleMouseMove(e);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
}
