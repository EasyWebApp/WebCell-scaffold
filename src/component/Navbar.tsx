import { JsxProps } from 'dom-renderer';
import { FC } from 'web-cell';

import { BackgroundColor, PositionY, Size } from './type';

export type NavbarBrandProps = JsxProps<HTMLAnchorElement>;

export const NavbarBrand: FC<NavbarBrandProps> = ({
    className = '',
    children,
    ...props
}) => (
    <a className={`navbar-brand ${className}`} {...props}>
        {children}
    </a>
);

export type NavbarToggleProps = JsxProps<HTMLButtonElement>;

export const NavbarToggle: FC<NavbarToggleProps> = ({
    className = '',
    type,
    children,
    ...props
}) => (
    <button className={`navbar-toggler ${className}`} type="button" {...props}>
        <span className="navbar-toggler-icon" />
    </button>
);

export interface NavbarProps extends JsxProps<HTMLDivElement> {
    variant?: 'light' | 'dark';
    bg?: BackgroundColor;
    expand?: boolean | Size;
    fixed?: PositionY;
    sticky?: PositionY;
}

export const Navbar: FC<NavbarProps> = ({
    variant = 'light',
    bg = 'body-tertiary',
    fixed,
    sticky,
    expand,
    children
}) => (
    <nav
        className={`navbar bg-${bg} ${fixed ? `fixed-${fixed}` : ''} ${
            sticky ? `sticky-${sticky}` : ''
        } ${
            expand ? `navbar-expand${expand === true ? '' : `-${expand}`}` : ''
        }`}
        data-bs-theme={variant}
    >
        {children}
    </nav>
);
