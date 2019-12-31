import { component, createCell, Fragment } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { HTMLRouter, matchRoutes } from 'cell-router/source';
import { NavBar } from 'boot-cell/source/Navigator/NavBar';

import { history } from '../model';
import { Hello } from './Hello';
import { CellClock } from './Clock';

@observer
@component({
  tagName: 'page-router',
  renderTarget: 'children'
})
export class PageRouter extends HTMLRouter {
  protected history = history;

  menu = [
    {
      title: 'Hello',
      href: 'hello'
    },
    {
      title: 'Clock',
      href: 'clock'
    }
  ];

  render() {
    return (
      <Fragment>
        <NavBar title="WebCell scaffold" menu={this.menu} narrow />

        <main className="container my-5 pt-3" style={{ minHeight: '60vh' }}>
          {matchRoutes(
            [
              {
                paths: ['clock'],
                component: CellClock
              },
              {
                paths: ['hello', ''],
                component: Hello
              }
            ],
            history.path
          )}
        </main>

        <footer className="text-center bg-light py-5">
          Proudly developed with
          <a className="mx-1" target="_blank" href="https://web-cell.dev/">
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
