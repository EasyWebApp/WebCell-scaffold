import { FC, WebCellProps } from 'web-cell';

export interface HelloProps extends WebCellProps {
    name?: string;
}

export const Hello: FC<HelloProps> = ({ name = 'World', ...props }) => (
    <h1 {...props}>Hello, {name}!</h1>
);
