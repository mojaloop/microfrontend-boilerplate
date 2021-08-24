import { combineReducers } from 'redux';
import { reducer as editor } from './Editor';
import { reducer as config } from './Config';

export const reducers = {
  editor,
  config,
};

export default combineReducers(reducers);
