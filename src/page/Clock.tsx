import { observable } from 'mobx';
import { component, observer, WebCell } from 'web-cell';

import { renderMode } from '../utility';

export interface CellClock extends WebCell {}

@component({ tagName: 'cell-clock', renderMode })
@observer
export class CellClock extends HTMLElement implements WebCell {
    @observable
    accessor time = new Date();

    private timer: number;

    connectedCallback() {
        this.timer = self.setInterval(() => (this.time = new Date()), 1000);
    }

    disconnectedCallback() {
        clearInterval(this.timer);
    }

    render() {
        const { time } = this;

        return <time dateTime={time.toJSON()}>{time.toLocaleString()}</time>;
    }
}
