import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-css/semantic.js';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";
import {
  Router
} from "react-router-dom";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}><Provider store={store} > <App /> </Provider></Router>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
