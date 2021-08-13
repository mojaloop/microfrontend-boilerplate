import axios from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';
import { all, put, takeLatest } from 'redux-saga/effects';
import { SUBMIT_EDITOR_FORM } from './types';
import { setSubmitError, setSubmitResponse } from './actions';

function* submitFormSaga(action: PayloadAction<string>): Generator {
  try {
    const response: any = yield axios({
      url: 'https://jsonplaceholder.typicode.com/posts',
      headers: {
        authentication: `bearer ${action.payload}`,
      },
    });
    yield put(setSubmitResponse(response.data));
  } catch (e) {
    yield put(setSubmitError(e.message));
  }
}

export function* SubmitFormSaga(): Generator {
  yield takeLatest(SUBMIT_EDITOR_FORM, submitFormSaga);
}

export default function* rootSaga(): Generator {
  yield all([SubmitFormSaga()]);
}
