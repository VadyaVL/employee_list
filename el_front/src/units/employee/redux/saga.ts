import { Job } from './../interfaces/job';
import { SagaIterator } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import { Action } from 'redux';

import { ActionWith } from './../../../common/interfaces/action-with';
import { Employee, EmployeeFormModel } from './../interfaces/employee';
import { EmployeeActionTypes } from './action-types';
import { EmployeeActions } from './actions';

function* loadEmployeeList(action: Action): SagaIterator {
  try {
    // load from API:
    const mock: Employee[] = [
      { id: 1, firstName: 'Вадим', lastName: 'Литвин', jobs: [{ id: 1, title: 'developer' }], rate: 1200, employmentDate: '2018-12-22', creationDate: '2018-12-22' },
      { id: 2, firstName: 'Дмитро', lastName: 'Шевчук', jobs: [{ id: 1, title: 'developer' }], rate: 1000, employmentDate: '2018-12-22', creationDate: '2018-12-22' },
    ];

    yield put(EmployeeActions.loadEmployeeListSucceeded(mock));
  } catch (error) {
    console.error(error);
  }
}

function* createEmployee(action: ActionWith<EmployeeFormModel>): SagaIterator {
  try {
    // delete with Api -> bool
    // get new from api

    yield put(EmployeeActions.createEmployeeSucceeded({
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      rate: action.payload.rate,
      employmentDate: '',
      creationDate: '',
      jobs: [],
      id: 100,
    }));
  } catch (error) {
    console.error(error);
  }
}

function* deleteEmployee(action: ActionWith<number>): SagaIterator {
  try {
    // delete with Api -> bool

    yield put(EmployeeActions.deleteEmployeeSucceeded(action.payload));
  } catch (error) {
    console.error(error);
  }
}

function* loadJobList(action: Action): SagaIterator {
  try {
    // load from API:
    const mock: Job[] = [
      { id: 1, title: 'Developer' },
      { id: 2, title: 'CEO' },
      { id: 3, title: 'Marketing' },
    ];

    yield put(EmployeeActions.loadJobListSucceeded(mock));
  } catch (error) {
    console.error(error);
  }
}

export function* employeeSaga(): SagaIterator {
  yield takeLatest(EmployeeActionTypes.LOAD_EMPLOYEE_LIST_REQUEST, loadEmployeeList);
  yield takeLatest(EmployeeActionTypes.CREATE_EMPLOYEE_REQUEST, createEmployee);
  yield takeLatest(EmployeeActionTypes.DELETE_EMPLOYEE_REQUEST, deleteEmployee);
  yield takeLatest(EmployeeActionTypes.LOAD_JOB_LIST_REQUEST, loadJobList);
}
