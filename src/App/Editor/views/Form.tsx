import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Icon, Row, TextField } from 'components';
// @ts-ignore
import WarnIcon from 'bootstrap-icons/icons/exclamation-diamond-fill.svg';
import { State } from 'store/types';
import { actions } from '../slice';
import './Form.scss';

interface FormProps {
  token?: string;
}
function NameForm({ token = '' }: FormProps) {
  const dispatch = useDispatch();

  const editor = useSelector((state: State) => state.editor);

  const { name, lastname, address, formSubmit } = editor;

  return (
    <Row align="center left">
      <div style={{ margin: '5px' }}>
        <Icon
          size={20}
          icon={<WarnIcon />}
          fill={getComputedStyle(document.documentElement).getPropertyValue('--color__primary')}
        />
      </div>
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
        disabled={formSubmit.pending}
        pending={formSubmit.pending}
      />
    </Row>
  );
}

export default NameForm;
