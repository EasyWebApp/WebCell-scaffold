import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';
import { documentReady, render, createCell } from 'web-cell';

import { PageRouter } from './page/PageRouter';

documentReady.then(() => render(<PageRouter />));
