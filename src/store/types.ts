import { Dispatch as ReduxDispatch } from 'redux';
import getCreateReducer from './createReducer';

const rootReducer = getCreateReducer()();

export type State = ReturnType<typeof rootReducer>;
export type Dispatch = ReduxDispatch;
