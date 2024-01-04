import { observable } from 'mobx';
import { component, observer } from 'web-cell';

@component({ tagName: 'cell-clock' })
@observer
export class CellClock extends HTMLElement {
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
