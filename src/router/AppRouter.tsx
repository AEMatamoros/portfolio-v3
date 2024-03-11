import { Suspense } from 'react';
import { NotFound, AppContainer } from '@Views/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Contact } from '@Components/index';

import useStore from '@/store/store';

export default function AppRouter() {
    const router = createBrowserRouter([
        {
            path: '/',
            errorElement: <NotFound />,
            element: <AppContainer></AppContainer>,
            children: [
                {
                    path: '',
                    lazy: async () => {
                        const { Hero } = await import('../views/Hero');
                        return { Component: Hero };
                    },
                },
                {
                    path: '/about',
                    lazy: async () => {
                        const { About } = await import(
                            '../components/shared/About'
                        );
                        return { Component: About };
                    },
                },
                {
                    path: '/proyects',
                    lazy: async () => {
                        const { Proyects } = await import('../views/Proyects');
                        return { Component: Proyects };
                    },
                },
                {
                    path: '/tecs',
                    lazy: async () => {
                        const { Tecnologies } = await import(
                            '../views/Tecnologies'
                        );
                        return { Component: Tecnologies };
                    },
                },
            ],
        },
    ]);

    const currentTheme = useStore(state => state.theme);

    return (
        <>
            <div className={`m-0 p-0 ${currentTheme}`}>
                <main className="min-h-[100vh] bg-light dark:bg-dark ">
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <RouterProvider router={router} />
                    </Suspense>
                    <Contact />
                </main>
            </div>
        </>
    );
}
