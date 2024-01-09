import { NavLink, NavbarBrand, OffcanvasNavbar } from 'boot-cell';
import { PageProps, createRouter } from 'cell-router';

import { CellClock } from './Clock';
import { Hello } from './Hello';
import { HomePage } from './Home';

import WebCell_0 from '../image/WebCell-0.png';

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

const { Route } = createRouter({
    startClass: 'start',
    endClass: 'end'
});

export const PageFrame = () => (
    <>
        <OffcanvasNavbar
            variant="dark"
            expand="md"
            sticky="top"
            fluid="lg"
            brand={
                <NavbarBrand>
                    <img
                        className="me-2"
                        style={{ width: '2rem' }}
                        alt="WebCell"
                        src={WebCell_0}
                    />
                    WebCell scaffold
                </NavbarBrand>
            }
        >
            <ul className="navbar-nav flex-row justify-content-end align-items-center flex-fill gap-3">
                {menu.map(({ title, href }) => (
                    <NavLink href={`#${href}`}>{title}</NavLink>
                ))}
            </ul>
        </OffcanvasNavbar>

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
