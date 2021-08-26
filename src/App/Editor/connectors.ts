import { State, Dispatch } from 'store';
import ReduxContext from 'store/context';
import { connect, ConnectedProps } from 'react-redux';
import { actions } from './slice';
import * as selectors from './selectors';

const mapStateProps = (state: State) => ({
  name: selectors.getName(state),
  lastname: selectors.getLastname(state),
  address: selectors.getAddress(state),
  formSubmit: selectors.getFormSubmit(state),
});

const mapDispatchProps = (dispatch: Dispatch) => ({
  onChangeEditorName: (value: string) => dispatch(actions.changeEditorName(value)),
  onChangeEditorLastname: (value: string) => dispatch(actions.changeEditorLastname(value)),
  onChangeEditorAddress: (value: string) => dispatch(actions.changeEditorAddress(value)),
  onSubmitEditorForm: () => dispatch(actions.submitEditorForm('token')),
  onSimulateUnauthenticatedRequest: () => dispatch(actions.simulateUnauthenticatedRequest()),
});

const editorConnector = connect(mapStateProps, mapDispatchProps, null, {
  context: ReduxContext,
});

export type EditorProps = ConnectedProps<typeof editorConnector>;
export default editorConnector;
