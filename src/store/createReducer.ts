import { combineReducers, Reducer } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { reducers } from '../App/reducer';

export default function getCreateReducer(history: History) {
  return function createReducer(): Reducer {
    return combineReducers({
      router: connectRouter(history),
      ...reducers,
    });
  };
}
