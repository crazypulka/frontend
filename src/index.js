import React from 'react';
import Root from './root';
import { render } from 'react-dom';
import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';

const target = document.getElementById('root');

console.info(Root);

render(<Root store={store} history={history}/>, target);

registerServiceWorker();
