import React from 'react';
import { useSelector } from 'react-redux';
import { MessageBox } from 'components';
import { State } from 'store';

export default function Data() {
  const { formSubmit } = useSelector((state: State) => state.editor);
  if (formSubmit.data) {
    return <div>{JSON.stringify(formSubmit.data)}</div>;
  }
  if (formSubmit.error) {
    return <MessageBox kind="danger">{formSubmit.error}</MessageBox>;
  }
  return <MessageBox>Nothing to display! Did you submit?</MessageBox>;
}
