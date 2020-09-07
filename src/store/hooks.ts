import { useState, useEffect } from 'react';
import { Reducer, Store } from 'redux';
import { useStore } from 'react-redux';

type Saga = () => Generator;

// We need to define the InjectReducer type extending the store the way we want
type InjectReducer = (name: string, reducer: Reducer) => () => void;
// We need to define the InjectSaga since type extending the store the way we want
type InjectSaga = (name: string, saga: Saga) => () => void;

interface StoreInjectors {
  injectReducer: InjectReducer;
  injectSaga: InjectSaga;
}

type InjectableStore = Store & StoreInjectors;

// Installs the reducer on the parent app and makes sure it is used
const useReducerLoader = (name: string, reducerFn: Reducer, saga: Saga) => {
  const store = useStore() as InjectableStore;
  const [isReducerLoaded, setReducerLoaded] = useState(false);

  useEffect(() => {
    store.injectReducer(name, reducerFn);
    store.injectSaga(name, saga);
  }, []);

  useEffect(() => {
    if (!isReducerLoaded && store.getState()[name] !== undefined) {
      setReducerLoaded(true);
    }
  }, []);
  return isReducerLoaded;
};

export { useReducerLoader };
