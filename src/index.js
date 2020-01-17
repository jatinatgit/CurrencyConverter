import React from 'react';
import ReactDOM from 'react-dom';
import { polyfill } from 'es6-promise';
import "@babel/polyfill";
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './AppRoot';
import configStore from './store';
import 'semantic-ui-css/semantic.min.css';

polyfill();

const ROOT = document.getElementById('root');
const history = createBrowserHistory();
const store = configStore(history);

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>, ROOT )