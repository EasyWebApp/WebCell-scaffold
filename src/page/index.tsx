import { PageProps, createRouter } from 'cell-router';

import WebCell_0 from '../image/WebCell-0.png';
import { CellClock } from './Clock';
import { Hello } from './Hello';
import { HomePage } from './Home';

const menu = [
    {
        title: 'Hello',
        href: '/hello'
    },
    {
        title: 'Clock',
        href: '/clock'
    },
    {
        title: 'GitHub source',
        href: 'https://github.com/EasyWebApp/scaffold'
    }
];

const { Route, Link } = createRouter({
    startClass: 'start',
    endClass: 'end'
});

export const PageFrame = () => (
    <>
        {/* <NavBar
            narrow
            expand="md"
            theme="dark"
            background="dark"
            brand={
                <img
                    alt="WebCell scaffold"
                    src={WebCell_0}
                    style={{ width: '2rem' }}
                />
            }
        > */}
        <nav>
            {menu.map(({ title, href }) => (
                <Link to={href}>{title}</Link>
            ))}
        </nav>
        {/* </NavBar> */}

        <main className="container router" style={{ minHeight: '60vh' }}>
            <Route
                path="/home"
                component={({ className }: PageProps) => (
                    <div className={`page ${className}`}>
                        <HomePage />
                    </div>
                )}
            />
            <Route
                path="/clock"
                component={({ className }: PageProps) => (
                    <div className={`page ${className}`}>
                        <CellClock />
                    </div>
                )}
            />
            <Route
                path="/hello"
                component={({ className }: PageProps) => (
                    <div className={`page ${className}`}>
                        <Hello />
                    </div>
                )}
            />
        </main>

        <footer className="text-center bg-light py-5">
            <img
                className="mx-1"
                style={{ width: '1.5rem' }}
                alt="WebCell scaffold"
                src={WebCell_0}
            />
            Proudly developed with
            <a className="mx-1" target="_blank" href="https://web-cell.dev/">
                WebCell v3
            </a>
            &amp;
            <a
                className="mx-1"
                target="_blank"
                href="https://bootstrap.web-cell.dev/"
            >
                BootCell v2
            </a>
        </footer>
    </>
);
