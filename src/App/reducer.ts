import { combineReducers } from 'redux';
import { reducer as editor } from './Editor';

export const reducers = {
  editor,
};

export default combineReducers(reducers);
