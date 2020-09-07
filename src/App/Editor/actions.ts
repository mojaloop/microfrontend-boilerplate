import { createAction } from '@reduxjs/toolkit';
import {
  CHANGE_EDITOR_NAME,
  CHANGE_EDITOR_LASTNAME,
  CHANGE_EDITOR_ADDRESS,
  SUBMIT_EDITOR_FORM,
  SET_SUBMIT_ERROR,
  SET_SUBMIT_RESPONSE,
} from './types';

export const changeEditorName = createAction<string>(CHANGE_EDITOR_NAME);
export const changeEditorLastname = createAction<string>(CHANGE_EDITOR_LASTNAME);
export const changeEditorAddress = createAction<string>(CHANGE_EDITOR_ADDRESS);
export const submitEditorForm = createAction<string>(SUBMIT_EDITOR_FORM);
export const setSubmitError = createAction<string>(SET_SUBMIT_ERROR);
export const setSubmitResponse = createAction<any[]>(SET_SUBMIT_RESPONSE);
