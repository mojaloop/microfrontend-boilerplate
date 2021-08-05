import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Icon, Row, TextField } from 'components';
import WarnIcon from 'bootstrap-icons/icons/exclamation-diamond-fill.svg';
import { State } from 'store/types';
import * as actions from '../actions';
import './Form.scss';

interface FormProps {
  token?: string;
}
const NameForm: FC<FormProps> = ({ token = '' }) => {
  const dispatch = useDispatch();

  const editor = useSelector((state: State) => state.editor);

  const { name, lastname, address, submitPending } = editor;

  return (
    <Row align="center left">
      <Icon size={30} icon={<WarnIcon />} fill="#999" />
      <TextField
        className="form__field"
        size="small"
        value={name}
        placeholder="Name"
        onChange={(value: string) => dispatch(actions.changeEditorName(value))}
      />
      <TextField
        className="form__field"
        size="small"
        value={lastname}
        placeholder="Lastname"
        onChange={(value: string) => dispatch(actions.changeEditorLastname(value))}
      />
      <TextField
        className="form__field"
        size="small"
        value={address}
        placeholder="Address"
        onChange={(value: string) => dispatch(actions.changeEditorAddress(value))}
      />
      <Button
        label="Submit"
        size="small"
        onClick={() => dispatch(actions.submitEditorForm(token))}
        disabled={submitPending}
        pending={submitPending}
      />
    </Row>
  );
};

export default NameForm;
