/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }] */
/* eslint-disable global-require */
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { loadState, saveState } from './localStorage';
import rootReducer from 'reducers';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { initSagas } from '../initSagas';
import initialState from './initialState';

export default (history) => {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  const createStoreWithMiddleware = compose(applyMiddleware(
    apiMiddleware,
    thunkMiddleware,
    createLogger(),
    sagaMiddleware,
  ))(createStore);

  const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  initSagas(sagaMiddleware);
  
  return store;
};
