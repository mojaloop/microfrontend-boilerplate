import { Dispatch as ReduxDispatch } from 'redux';
import { RouterState } from 'connected-react-router';
import { EditorState } from 'App/Editor/types';

export interface State {
  router: RouterState;
  subApp: {
    editor: EditorState;
  };
}
export type PartialState = Partial<State>;

export type Dispatch = ReduxDispatch;
