import React from 'react';
import { Button, Icon, Row, TextField } from 'components';
// @ts-ignore
import WarnIcon from 'bootstrap-icons/icons/exclamation-diamond-fill.svg';
import './Form.scss';
import editorConnector, { EditorProps } from '../connectors';

function Form({
  name,
  lastname,
  address,
  formSubmit,
  onChangeEditorName,
  onChangeEditorLastname,
  onChangeEditorAddress,
  onSubmitEditorForm,
  onSimulateUnauthenticatedRequest,
}: EditorProps) {
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
        onChange={onChangeEditorName}
      />
      <TextField
        className="form__field"
        size="small"
        value={lastname}
        placeholder="Lastname"
        onChange={onChangeEditorLastname}
      />
      <TextField
        className="form__field"
        size="small"
        value={address}
        placeholder="Address"
        onChange={onChangeEditorAddress}
      />
      <Button
        label="Submit Form"
        size="small"
        onClick={onSubmitEditorForm}
        disabled={formSubmit.pending}
        pending={formSubmit.pending}
      />
      <Button
        label="Simluate unauthenticated request"
        size="small"
        kind="danger"
        onClick={onSimulateUnauthenticatedRequest}
      />
    </Row>
  );
}

export default editorConnector(Form);
