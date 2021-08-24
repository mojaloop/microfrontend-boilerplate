import { RequestState } from '@modusbox/redux-utils/lib/reducers/request';

export interface Account {
  name: string;
  lastname: string;
  address: string;
}

export interface EditorState {
  name: string;
  lastname: string;
  address: string;
  formSubmit: RequestState<Account>;
}
