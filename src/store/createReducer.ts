import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { reducers } from '../App/reducer';

export default function getCreateReducer(history: History | null = null) {
  const dynamicReducers = { ...reducers };
  if (history) {
    // @ts-ignore
    dynamicReducers.router = connectRouter(history);
  }
  return function createReducer() {
    return combineReducers(dynamicReducers);
  };
}
