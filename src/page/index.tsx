import { Nav, NavbarBrand, NavLink, OffcanvasNavbar } from 'boot-cell';
import { createRouter } from 'cell-router';

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
        href: 'https://github.com/EasyWebApp/WebCell-scaffold'
    }
];

const { Route } = createRouter();

export const PageFrame = () => (
    <div className="d-flex flex-column vh-100">
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
                    WebCell-scaffold
                </NavbarBrand>
            }
        >
            <Nav className="justify-content-end flex-fill gap-3">
                {menu.map(({ title, href }) => (
                    <NavLink href={href.startsWith('http') ? href : `#${href}`}>
                        {title}
                    </NavLink>
                ))}
            </Nav>
        </OffcanvasNavbar>

        <main className="container flex-fill">
            <Route path="" component={HomePage} />
            <Route path="/clock" component={CellClock} />
            <Route path="/hello" component={Hello} />
        </main>

        <footer className="text-center bg-light py-5">
            <img
                className="mx-1"
                style={{ width: '1.5rem' }}
                alt="WebCell"
                src={WebCell_0}
            />
            Proudly developed with
            <a
                className="mx-1"
                target="_blank"
                href="https://web-cell.dev/"
                rel="noreferrer"
            >
                WebCell v3
            </a>
            &amp;
            <a
                className="mx-1"
                target="_blank"
                href="https://bootstrap.web-cell.dev/"
                rel="noreferrer"
            >
                BootCell v2
            </a>
        </footer>
    </div>
);
