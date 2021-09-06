import React, { Context } from 'react';
import { createSelectorHook, createStoreHook, ReactReduxContextValue } from 'react-redux';

const ReduxContext = React.createContext(null) as unknown as Context<ReactReduxContextValue>;

export default ReduxContext;

export const useStore = createStoreHook(ReduxContext);
export const useSelector = createSelectorHook(ReduxContext);
