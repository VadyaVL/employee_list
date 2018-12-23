import { EmployeeState } from '../../units/employee/interfaces/redux-state';

interface DialogState {
  [dialogName: string]: boolean;
}

export interface CommonState {
  dialog: Readonly<DialogState>;
}

interface MutableState {
  employee: Readonly<EmployeeState>;
  common: Readonly<CommonState>;
}

export type ReduxState = Readonly<MutableState>;
