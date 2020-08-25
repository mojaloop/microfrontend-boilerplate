import { Store } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import getCreateReducer from './createReducer';
import sagas from './sagas';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof composeWithDevTools;
    store?: () => Store;
  }
}

interface StoreConfig {
  isDevelopment: boolean;
}

/**
 * Creates a store using the configureStore function from @reduxjs/toolkit.
 * @see https://redux-toolkit.js.org/api/configureStore
 * @see https://blog.logrocket.com/smarter-redux-with-redux-toolkit/
 * @param history
 * @param config
 */
export default function configure(
  history: History,
  config: StoreConfig = {
    isDevelopment: process.env.NODE_ENV === 'development',
  },
): Store {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;
  const createReducer = getCreateReducer(history);

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const middleware = [...getDefaultMiddleware(), routerMiddleware(history), sagaMiddleware];
  const store = configureStore({
    reducer: createReducer(),
    middleware,
    enhancers,
    devTools: config.isDevelopment,
  });

  if (module.hot) {
    module.hot.accept('store/index', () => {
      forceReducerReload(configure(history));
    });
  }

  sagaMiddleware.run(sagas);

  return store;
}
