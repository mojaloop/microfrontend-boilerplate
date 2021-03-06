import { createSelector } from '@reduxjs/toolkit';
import { State } from 'store';

export const getName = (state: State) => state.editor.name;
export const getLastname = (state: State) => state.editor.lastname;
export const getAddress = (state: State) => state.editor.address;
export const getFormSubmit = (state: State) => state.editor.formSubmit;
export const getIsFormEdited = createSelector(
  getName,
  getLastname,
  getAddress,
  (name, lastName, address) => name !== '' || lastName !== '' || address !== '',
);
