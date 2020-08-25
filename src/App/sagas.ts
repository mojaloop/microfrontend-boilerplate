import { all } from 'redux-saga/effects';
import editorSagas from './Editor/sagas';

function* rootSaga(): Generator {
  yield all([editorSagas()]);
}

export default rootSaga;
