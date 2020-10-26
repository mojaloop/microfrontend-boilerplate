import { combineReducers } from 'redux';
import editorReducer from './Editor/reducer';

export const reducers = {
  editor: editorReducer,
};

export default combineReducers(reducers);
