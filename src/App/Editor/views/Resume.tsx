import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { TextField } from 'components';
import { State } from 'store/types';
import './Resume.css';

const Resume: FC<unknown> = () => {
  const { name, lastname, address } = useSelector((state: State) => state.editor);
  return (
    <div>
      <TextField className="resume__field" size="small" value={name} placeholder="Name" disabled />
      <TextField
        className="resume__field"
        size="small"
        value={lastname}
        placeholder="Lastname"
        disabled
      />
      <TextField
        className="resume__field"
        size="small"
        value={address}
        placeholder="Address"
        disabled
      />
    </div>
  );
};

export default Resume;
