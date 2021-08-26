import React from 'react';
import { Button, Column, Icon, TextField } from 'components';
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
  const warnIcon = (
    <Icon
      size={20}
      icon={<WarnIcon />}
      fill={getComputedStyle(document.documentElement).getPropertyValue('--color__primary')}
    />
  );

  return (
    <Column align="center left" className="form__column">
      <TextField
        className="form__field"
        value={name}
        placeholder="Name"
        onChange={onChangeEditorName}
      />
      <TextField
        className="form__field"
        value={lastname}
        placeholder="Lastname"
        onChange={onChangeEditorLastname}
      />
      <TextField
        className="form__field"
        value={address}
        placeholder="Address"
        onChange={onChangeEditorAddress}
      />
      <Button
        label="Submit Form"
        className="form__field"
        onClick={onSubmitEditorForm}
        disabled={formSubmit.pending}
        pending={formSubmit.pending}
      />
      <Button
        label="Simluate unauthenticated request"
        className="form__field"
        kind="danger"
        onClick={onSimulateUnauthenticatedRequest}
        icon={warnIcon}
      />
    </Column>
  );
}

export default editorConnector(Form);
