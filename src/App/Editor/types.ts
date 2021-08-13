export interface EditorState {
  name: string;
  lastname: string;
  address: string;
  submitPending: boolean;
  submitData?: any[];
  submitError: null | string;
}
