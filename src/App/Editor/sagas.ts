import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import api from 'utils/api';
import { State } from 'store';
import { actions } from './slice';

function* submitFormSaga(
  action: PayloadAction<string>,
): Generator<unknown, void, ReturnType<typeof api.account.create>> {
  try {
    const response: ReturnType<typeof api.account.create> = yield call(api.account.create, {
      token: action.payload,
    });
    yield put(actions.setSubmitResponse(response.data));
  } catch (e) {
    yield put(actions.setSubmitError(e.message));
  }
}

export function* SubmitFormSaga(): Generator {
  yield takeLatest(actions.submitEditorForm.type, submitFormSaga);
}

function* simulateUnauthSaga(): Generator<unknown, void, State> {
  const state: State = yield select();
  window.location.href = state.config.loginEndpoint;
}

export function* SimulateUnauthSaga(): Generator {
  yield takeLatest(actions.simulateUnauthenticatedRequest.type, simulateUnauthSaga);
}

export default function* rootSaga(): Generator {
  yield all([SubmitFormSaga(), SimulateUnauthSaga()]);
}
