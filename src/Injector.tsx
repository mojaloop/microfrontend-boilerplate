import React, { FC, useState } from 'react';
import { Reducer, Store } from 'redux';
import { useStore } from 'react-redux';
import { App } from './App';
import reducer from './App/reducer';
import sagas from './App/sagas';

// We need to define the InjectReducer type extending the store the way we want
type InjectReducer = (name: string, reducer: Reducer) => () => void | undefined;
// We need to define the InjectSaga since type extending the store the way we want
type InjectSaga = (name: string, saga: () => Generator) => () => void;
type ExtendedStore = Store & {
  injectReducer: InjectReducer;
  injectSaga: InjectSaga;
};

// Installs the reducer on the parent app and makes sure it is used
const useReducerLoader = (name: string, reducerFunction: Reducer) => {
  const store = useStore() as ExtendedStore;
  const [isReducerLoaded, setReducerLoaded] = useState(false);

  React.useEffect(() => {
    // we inject the reducer at runtime
    store.injectReducer(name, reducerFunction);
    // we inject the saga at runtime
    store.injectSaga(name, sagas);
  }, []);

  React.useEffect(() => {
    if (!isReducerLoaded && store.getState()[name] !== undefined) {
      setReducerLoaded(true);
    }
  }, []);
  return isReducerLoaded;
};

// TODO: investigating better way of injecting reducer at runtime
const AppWithStoreInjector: FC<unknown> = () => {
  const isReducerLoaded = useReducerLoader('subApp', reducer);
  return isReducerLoaded ? <App /> : null;
};

export default AppWithStoreInjector;
