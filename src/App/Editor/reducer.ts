import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { EditorState } from './types';
import {
  changeEditorName,
  changeEditorLastname,
  changeEditorAddress,
  submitEditorForm,
  setSubmitError,
  setSubmitResponse,
} from './actions';

const initialState: EditorState = {
  name: '',
  lastname: '',
  address: '',
  submitPending: false,
  submitData: undefined,
  submitError: null,
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(changeEditorName, (state: EditorState, action: PayloadAction<string>) => ({
      ...state,
      name: action.payload,
    }))
    .addCase(changeEditorLastname, (state: EditorState, action: PayloadAction<string>) => ({
      ...state,
      lastname: action.payload,
    }))
    .addCase(changeEditorAddress, (state: EditorState, action: PayloadAction<string>) => ({
      ...state,
      address: action.payload,
    }))
    .addCase(submitEditorForm, (state: EditorState) => ({
      ...state,
      submitPending: true,
      submitData: initialState.submitData,
      submitError: initialState.submitError,
    }))
    .addCase(setSubmitResponse, (state: EditorState, action: PayloadAction<any[]>) => ({
      ...state,
      submitData: action.payload,
      submitPending: false,
    }))
    .addCase(setSubmitError, (state: EditorState, action: PayloadAction<string>) => ({
      ...state,
      submitError: action.payload,
      submitPending: false,
    })),
);
