import { useState, useEffect } from 'react';
import { Reducer } from 'redux';
import { useStore } from 'react-redux';
import { Saga } from '@redux-saga/types';
import { InjectableStore } from '@modusbox/redux-utils/lib/injectors/types';

// Installs the reducer on the parent app and makes sure it is used
export default function useChildStore(reducer: Reducer, saga: Saga) {
  const store = useStore() as InjectableStore;
  const [childStore, setChildStore] = useState(null);

  useEffect(() => {
    function injectAndGetStoreInstance() {
      const currentStore = store.inject({ reducer, saga });
      setChildStore(currentStore);
    }
    injectAndGetStoreInstance();
  }, []);

  return childStore;
}
