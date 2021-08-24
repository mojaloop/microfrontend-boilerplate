import { Store } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import createSagaMiddleware from 'redux-saga';
import getCreateReducer from './createReducer';
import sagas from './sagas';

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
  history: History | null,
  config: StoreConfig = {
    isDevelopment: process.env.NODE_ENV === 'development',
  },
): Store {
  const sagaMiddleware = createSagaMiddleware({});
  const createReducer = getCreateReducer(history);

  const middleware = [...getDefaultMiddleware()];
  if (history) {
    middleware.push(routerMiddleware(history));
  }
  middleware.push(sagaMiddleware);

  const store = configureStore({
    reducer: createReducer(),
    middleware,
    devTools: config.isDevelopment,
  });

  sagaMiddleware.run(sagas);

  return store;
}
