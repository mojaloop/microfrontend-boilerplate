import axios from 'axios';
import { all, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { EDITOR_CHANGE_NAME } from './types';

function* loadTestData(action: PayloadAction<string>) {
  try {
    const response = yield axios({
      url: 'https://jsonplaceholder.typicode.com/posts',
    });
    console.log(response, action.payload);
  } catch (e) {
    console.error(e);
  }
}

export function* ChangeNameSage(): Generator {
  yield takeLatest(EDITOR_CHANGE_NAME, loadTestData);
}

export default function* rootSaga(): Generator {
  yield all([ChangeNameSage()]);
}
