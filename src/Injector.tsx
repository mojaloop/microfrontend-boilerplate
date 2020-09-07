import React, { FC } from 'react';
import { useReducerLoader } from 'store/hooks';
import { App } from './App';
import reducer from './App/reducer';
import sagas from './App/sagas';

interface AppWithStoreInjectorProps {
  token?: string;
}

const AppWithStoreInjector: FC<AppWithStoreInjectorProps> = ({ token }) => {
  let isReducerLoaded = false;
  try {
    isReducerLoaded = useReducerLoader('subApp', reducer, sagas);
  } catch (e) {
    console.log(e);
  }
  return isReducerLoaded ? <App token={token} /> : <div>error while loading reducer / sagas</div>;
};

export default AppWithStoreInjector;
