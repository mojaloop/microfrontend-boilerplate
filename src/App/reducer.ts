import { combineReducers } from 'redux';
import editorReducer from './Editor/reducer';

export default combineReducers({
  editor: editorReducer,
});
