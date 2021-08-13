import React from 'react';
import { useSelector } from 'react-redux';
import { MessageBox } from 'components';
import { State } from 'store/types';

export default function Data() {
  const { submitData, submitError } = useSelector((state: State) => state.editor);
  if (submitData) {
    return <div>{submitData}</div>;
  }
  if (submitError) {
    return <MessageBox kind="danger">{submitError}</MessageBox>;
  }
  return <MessageBox>Nothing to display! Did you submit?</MessageBox>;
}
