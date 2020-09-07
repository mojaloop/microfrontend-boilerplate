import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { TextField } from 'components';
import { State } from 'store/types';
import './Resume.css';

const Resume: FC<unknown> = () => {
  const { name, lastname, address } = useSelector((state: State) => state.subApp.editor);
  return (
    <div>
      <TextField className="resume__field" size="s" value={name} placeholder="Name" disabled />
      <TextField
        className="resume__field"
        size="s"
        value={lastname}
        placeholder="Lastname"
        disabled
      />
      <TextField
        className="resume__field"
        size="s"
        value={address}
        placeholder="Address"
        disabled
      />
    </div>
  );
};

export default Resume;
