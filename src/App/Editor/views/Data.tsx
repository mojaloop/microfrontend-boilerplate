import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { ContentReader, MessageBox } from 'components';
import { State } from 'store/types';
import './Form.css';

const Data: FC<unknown> = () => {
  const { submitData, submitError } = useSelector((state: State) => state.editor);
  if (submitData) {
    return <ContentReader data={submitData} />;
  }
  if (submitError) {
    return <MessageBox kind="danger">{submitError}</MessageBox>;
  }
  return <MessageBox>Nothing to display! Did you submit?</MessageBox>;
};

export default Data;
