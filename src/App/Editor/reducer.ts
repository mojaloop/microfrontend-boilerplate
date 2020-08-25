import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { EditorState } from './types';
import { changeEditorName, changeEditorLastname, changeEditorAddress } from './actions';

const initialState: EditorState = {
  name: '',
  lastname: '',
  address: '',
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
    })),
);
