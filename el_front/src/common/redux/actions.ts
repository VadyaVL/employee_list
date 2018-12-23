import { ActionWith } from './../interfaces/action-with';
import { CommonActionTypes } from './action-types';

function openDialog(dialogName: string): ActionWith<string> {
  return {
    type: CommonActionTypes.OPEN_DIALOG,
    payload: dialogName,
  };
}

function closeDialog(dialogName: string): ActionWith<string> {
  return {
    type: CommonActionTypes.CLOSE_DIALOG,
    payload: dialogName,
  };
}

export const CommonActions = {
  openDialog,
  closeDialog,
};
