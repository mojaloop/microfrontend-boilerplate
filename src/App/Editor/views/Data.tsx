import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { MessageBox } from 'components';
import { State } from 'store/types';
import './Form.css';

const Data: FC<unknown> = () => {
  const { submitData, submitError } = useSelector((state: State) => state.editor);
  if (submitData) {
    return <div>{submitData}</div>;
  }
  if (submitError) {
    return <MessageBox kind="danger">{submitError}</MessageBox>;
  }
  return <MessageBox>Nothing to display! Did you submit?</MessageBox>;
};

export default Data;
