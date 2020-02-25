import { component, createCell, Fragment } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { HTMLRouter } from 'cell-router/source';
import { NavBar } from 'boot-cell/source/Navigator/NavBar';

import { history } from '../model';
import WebCell_0 from '../image/WebCell-0.png';

import { Hello } from './Hello';
import { CellClock } from './Clock';

@observer
@component({
    tagName: 'page-router',
    renderTarget: 'children'
})
export class PageRouter extends HTMLRouter {
    protected history = history;
    protected routes = [
        {
            paths: ['clock'],
            component: CellClock
        },
        {
            paths: ['hello', ''],
            component: Hello
        }
    ];

    menu = [
        {
            title: 'Hello',
            href: 'hello'
        },
        {
            title: 'Clock',
            href: 'clock'
        },
        {
            title: 'GitHub source',
            href: 'https://github.com/EasyWebApp/scaffold'
        }
    ];

    render() {
        return (
            <Fragment>
                <NavBar
                    narrow
                    brand={
                        <img
                            alt="WebCell scaffold"
                            src={WebCell_0}
                            style={{ width: '2rem' }}
                        />
                    }
                    menu={this.menu}
                />

                <main
                    className="container my-5 pt-3"
                    style={{ minHeight: '60vh' }}
                >
                    {super.render()}
                </main>

                <footer className="text-center bg-light py-5">
                    Proudly developed with
                    <a
                        className="mx-1"
                        target="_blank"
                        href="https://web-cell.dev/"
                    >
                        WebCell v2
                    </a>
                    &amp;
                    <a
                        className="mx-1"
                        target="_blank"
                        href="https://web-cell.dev/BootCell/"
                    >
                        BootCell v1
                    </a>
                </footer>
            </Fragment>
        );
    }
}
