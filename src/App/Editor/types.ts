export const CHANGE_EDITOR_NAME = 'Editor/ Change Name';
export const CHANGE_EDITOR_LASTNAME = 'Editor/ Change Lastname';
export const CHANGE_EDITOR_ADDRESS = 'Editor/ Change Address';
export const SUBMIT_EDITOR_FORM = 'Editor / Submit Form';
export const SET_SUBMIT_ERROR = 'Editor / Set Submit Error';
export const SET_SUBMIT_RESPONSE = 'Editor / Set Submit Response';

export interface EditorState {
  name: string;
  lastname: string;
  address: string;
  submitPending: boolean;
  submitData?: any[];
  submitError: null | string;
}
