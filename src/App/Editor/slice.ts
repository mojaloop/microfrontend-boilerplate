import requestState from '@modusbox/redux-utils/lib/reducers/request';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditorState, Account } from './types';

export const initialState: EditorState = {
  name: '',
  lastname: '',
  address: '',
  formSubmit: requestState(),
};

const slice = createSlice({
  name: 'Sagas',
  initialState,
  reducers: {
    changeEditorName(state: EditorState, action: PayloadAction<string>) {
      return {
        ...state,
        name: action.payload,
      };
    },
    changeEditorLastname(state: EditorState, action: PayloadAction<string>) {
      return {
        ...state,
        lastname: action.payload,
      };
    },
    changeEditorAddress(state: EditorState, action: PayloadAction<string>) {
      return {
        ...state,
        address: action.payload,
      };
    },
    submitEditorForm: {
      reducer: (state: EditorState) => {
        return {
          ...state,
          formSubmit: requestState.request(state.formSubmit),
        };
      },
      prepare: (token: string) => {
        return { payload: token };
      },
    },
    setSubmitResponse(state: EditorState, action: PayloadAction<Account>) {
      return {
        ...state,
        formSubmit: requestState.succeeded(state.formSubmit, action.payload),
      };
    },
    setSubmitError(state: EditorState, action: PayloadAction<string>) {
      return {
        ...state,
        formSubmit: requestState.failed(state.formSubmit, action.payload),
      };
    },
  },
});

export const { reducer, actions } = slice;
export default reducer;
