import { EmployeeApi } from './api';
import { Job } from './../interfaces/job';
import { SagaIterator } from 'redux-saga';
import { put, takeLatest, call } from 'redux-saga/effects';
import { Action } from 'redux';

import { ActionWith } from './../../../common/interfaces/action-with';
import { Employee, EmployeeFormModel } from './../interfaces/employee';
import { EmployeeActionTypes } from './action-types';
import { EmployeeActions } from './actions';

function* loadEmployeeList(action: Action): SagaIterator {
  try {
    const data: Employee[] = yield call(EmployeeApi.loadEmployeeList)
    yield put(EmployeeActions.loadEmployeeListSucceeded(data));
  } catch (error) {
    console.error(error);
  }
}

function* createEmployee(action: ActionWith<EmployeeFormModel>): SagaIterator {
  try {
    const jobsAsNumber = action.payload.jobs.map(id => parseInt(id.toString(), 10));
    const data: Employee = yield call(EmployeeApi.createEmployee, {
      ...action.payload,
      jobs: jobsAsNumber,
      rate: parseInt(action.payload.rate.toString(), 10)
    });
    yield put(EmployeeActions.createEmployeeSucceeded(data));
  } catch (error) {
    console.error(error);
  }
}

function* deleteEmployee(action: ActionWith<number>): SagaIterator {
  try {
    const data: boolean = yield call(EmployeeApi.deleteEmployee, action.payload)
    if (data) {
      yield put(EmployeeActions.deleteEmployeeSucceeded(action.payload));
    }
  } catch (error) {
    console.error(error);
  }
}

function* loadJobList(action: Action): SagaIterator {
  try {
    const data: Job[] = yield call(EmployeeApi.loadJobList)
    yield put(EmployeeActions.loadJobListSucceeded(data));
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
