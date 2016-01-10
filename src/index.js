import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Root from './router';
import {store} from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.querySelector('#root')
);
