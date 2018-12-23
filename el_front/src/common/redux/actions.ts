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

function addNotification(text: string): ActionWith<string> {
  return {
    type: CommonActionTypes.ADD_NOTIFICATION,
    payload: text,
  };
}

function removeNotification(index: number): ActionWith<number> {
  return {
    type: CommonActionTypes.REMOVE_NOTIFICATION,
    payload: index,
  };
}

export const CommonActions = {
  openDialog,
  closeDialog,
  addNotification,
  removeNotification,
};
