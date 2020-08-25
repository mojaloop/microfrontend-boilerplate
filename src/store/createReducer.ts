import { combineReducers, Reducer } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import AppReducer from '../App/reducer';

export default function getCreateReducer(history: History) {
  return function createReducer(): Reducer {
    return combineReducers({
      router: connectRouter(history),
      subApp: AppReducer,
    });
  };
}
