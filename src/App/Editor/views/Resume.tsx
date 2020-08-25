import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { State } from 'store/types';

const Resume: FC<unknown> = () => {
  const editor = useSelector((state: State) => state.subApp.editor);
  return (
    <div>
      Name: {editor.name} <br />
      Lastname: {editor.lastname} <br />
      Address: {editor.address} <br />
    </div>
  );
};

export default Resume;
