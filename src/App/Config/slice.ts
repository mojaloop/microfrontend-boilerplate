import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ConfigState, AuthConfig } from './types';

export const initialState: ConfigState = {
  tokenEndpoint: '',
  loginEndpoint: '',
  logoutEndpoint: '',
  isAuthEnabled: true,
  counter: 0,
};

const slice = createSlice({
  name: 'Microfrontend / Auth',
  initialState,
  reducers: {
    setConfig(state: ConfigState, action: PayloadAction<AuthConfig>) {
      return {
        ...state,
        ...action.payload,
      };
    },
    increaseCounter(state: ConfigState) {
      return {
        ...state,
        counter: state.counter + 1,
      };
    },
  },
});

export const { reducer, actions } = slice;
export default reducer;
