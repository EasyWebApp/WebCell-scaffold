import { JsxProps } from 'dom-renderer';
import { FC } from 'web-cell';
import { uniqueID } from 'web-utility';

export const OffcanvasTitle: FC<JsxProps<HTMLHeadingElement>> = ({
    className = '',
    children,
    ...props
}) => (
    <h5 className={`offcanvas-title ${className}`} {...props}>
        {children}
    </h5>
);

export interface OffcanvasHeaderProps extends JsxProps<HTMLDivElement> {
    closeButton?: boolean;
}

export const OffcanvasHeader: FC<OffcanvasHeaderProps> = ({
    className = '',
    closeButton,
    children,
    ...props
}) => (
    <div className={`offcanvas-header ${className}`} {...props}>
        {children}

        {closeButton && (
            <button
                className="btn-close"
                type="button"
                data-bs-dismiss="offcanvas"
                ariaLabel="Close"
            />
        )}
    </div>
);

export const OffcanvasBody: FC<JsxProps<HTMLDivElement>> = ({
    className = '',
    children,
    ...props
}) => (
    <div className={`offcanvas-body ${className}`} {...props}>
        {children}
    </div>
);

export interface OffcanvasProps extends JsxProps<HTMLDivElement> {
    show?: boolean;
}

export const Offcanvas: FC<OffcanvasProps> = ({
    className = '',
    show,
    children,
    ...props
}) => (
    <div
        className={`offcanvas ${className} ${show ? 'show' : ''}`}
        tabIndex={-1}
        {...props}
    >
        {children}
    </div>
);

export interface OffcanvasBoxProps
    extends OffcanvasProps,
        OffcanvasHeaderProps {
    titleId?: string;
}

export const OffcanvasBox: FC<OffcanvasBoxProps> = ({
    title,
    titleId = uniqueID(),
    closeButton,
    children,
    ...props
}) => (
    <Offcanvas {...props} aria-labelledby={titleId}>
        <OffcanvasHeader closeButton={closeButton}>
            <OffcanvasTitle id={titleId}>{title}</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>{children}</OffcanvasBody>
    </Offcanvas>
);
