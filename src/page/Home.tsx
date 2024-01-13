import { PageProps } from 'cell-router';
import { FC } from 'web-cell';

import { CellClock } from './Clock';
import { Hello } from './Hello';

export const HomePage: FC<PageProps> = props => (
    <div {...props}>
        <Hello name="WebCell" />
        <div>
            We use the same configuration as Parcel to bundle this sandbox, you
            can find more info about Parcel{' '}
            <a
                href="https://parceljs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                here
            </a>
            .
        </div>
        <CellClock />
    </div>
);
