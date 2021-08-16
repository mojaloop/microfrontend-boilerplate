import axios from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';
import { all, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';

function* submitFormSaga(action: PayloadAction<string>): Generator {
  try {
    const response: any = yield axios({
      url: 'https://jsonplaceholder.typicode.com/posts',
      headers: {
        authentication: `bearer ${action.payload}`,
      },
    });
    yield put(actions.setSubmitResponse(response.data));
  } catch (e) {
    yield put(actions.setSubmitError(e.message));
  }
}

export function* SubmitFormSaga(): Generator {
  yield takeLatest(actions.submitEditorForm.type, submitFormSaga);
}

export default function* rootSaga(): Generator {
  yield all([SubmitFormSaga()]);
}
