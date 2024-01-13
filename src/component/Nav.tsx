import { OffcanvasNavbar } from 'boot-cell';
import { WebCell, component, WebCellProps } from 'web-cell';

export interface Nav extends WebCell {}

@component({
    tagName: 'bs-nav',
    mode: 'open'
})
export class Nav extends HTMLElement implements WebCell {
    declare props: WebCellProps;

    connectedCallback() {
        const navBar = this.closest<OffcanvasNavbar>(
            'offcanvas-navbar, .navbar'
        );

        if (!navBar) return this.classList.add('nav');

        const expand =
            navBar.expand ||
            navBar.className.match(/navbar-expand(-(\S+))?/)?.[2];

        this.classList.add(
            'navbar-nav',
            'align-items-center',
            expand && 'flex-column',
            expand && `flex-${expand}-row`
        );
    }

    render() {
        return <slot />;
    }
}
