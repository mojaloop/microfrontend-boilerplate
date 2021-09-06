import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ConfigState, AuthConfig } from './types';

export const initialState: ConfigState = {
  loginEndpoint: '',
  logoutEndpoint: '',
  isAuthEnabled: true,
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
  },
});

export const { reducer, actions } = slice;
export default reducer;
