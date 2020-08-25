import { all } from 'redux-saga/effects';
import appSagas from '../App/sagas';

function* rootSaga(): Generator {
  yield all([appSagas()]);
}

export default rootSaga;
