import { documentReady, render, createCell } from 'web-cell';

import { PageRouter } from './page/PageRouter';

if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.ts');

documentReady.then(() => render(<PageRouter />));
