import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions';
import { State } from 'store/types';

const NameForm: FC<unknown> = () => {
  const dispatch = useDispatch();
  const editor = useSelector((state: State) => state.subApp.editor);
  return (
    <div>
      <br />
      <input
        type="text"
        placeholder="Name"
        value={editor.name}
        onChange={(e) => dispatch(actions.changeEditorName(e.target.value))}
      />
      <br />
      <input
        type="text"
        placeholder="Lastname"
        value={editor.lastname}
        onChange={(e) => dispatch(actions.changeEditorLastname(e.target.value))}
      />
      <br />
      <input
        type="text"
        placeholder="Address"
        value={editor.address}
        onChange={(e) => dispatch(actions.changeEditorAddress(e.target.value))}
      />
    </div>
  );
};

export default NameForm;
