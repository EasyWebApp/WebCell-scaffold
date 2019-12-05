import { createCell, component, mixin, watch } from 'web-cell';

@component({
  tagName: 'cell-clock'
})
export class CellClock extends mixin() {
  @watch
  time = new Date();

  private timer: number;

  connectedCallback() {
    this.timer = setInterval(() => (this.time = new Date()), 1000);
  }

  disconnectedCallback() {
    clearInterval(this.timer);
  }

  render() {
    const { time } = this;

    return <div>{time.toLocaleString()}</div>;
  }
}
