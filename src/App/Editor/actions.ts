import { createAction } from '@reduxjs/toolkit';
import { EDITOR_CHANGE_NAME, EDITOR_CHANGE_LASTNAME, EDITOR_CHANGE_ADDRESS } from './types';

export const changeEditorName = createAction<string>(EDITOR_CHANGE_NAME);
export const changeEditorLastname = createAction<string>(EDITOR_CHANGE_LASTNAME);
export const changeEditorAddress = createAction<string>(EDITOR_CHANGE_ADDRESS);
