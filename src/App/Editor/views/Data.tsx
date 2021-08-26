import React from 'react';
import { MessageBox } from 'components';
import editorConnector, { EditorProps } from '../connectors';

function Data({ formSubmit }: EditorProps) {
  if (formSubmit.data) {
    return <div>{JSON.stringify(formSubmit.data)}</div>;
  }
  if (formSubmit.error) {
    return <MessageBox kind="danger">{formSubmit.error}</MessageBox>;
  }
  return <MessageBox>Nothing to display! Did you submit?</MessageBox>;
}

export default editorConnector(Data);
