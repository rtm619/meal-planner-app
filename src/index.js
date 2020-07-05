import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider as MobxProvider } from 'mobx-react'

import App from './App';
import authStore from './stores/Auth.store'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <MobxProvider authStore={authStore}>
      <App />
    </MobxProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
