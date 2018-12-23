import { Job } from './../interfaces/job';
import { Action } from 'redux';

import { EmployeeActionTypes } from './action-types';
import { Employee, EmployeeFormModel } from './../interfaces/employee';
import { ActionWith } from '../../../common/interfaces';

function loadEmployeeList(): Action {
  return {
    type: EmployeeActionTypes.LOAD_EMPLOYEE_LIST_REQUEST,
  };
}

function loadEmployeeListSucceeded(
  data: Employee[],
): ActionWith<Employee[]> {
  return {
    type: EmployeeActionTypes.LOAD_EMPLOYEE_LIST_SUCCEEDED,
    payload: data,
  };
}

function createEmployee(
  data: EmployeeFormModel,
): ActionWith<EmployeeFormModel> {
  return {
    type: EmployeeActionTypes.CREATE_EMPLOYEE_REQUEST,
    payload: data,
  };
}

function createEmployeeSucceeded(
  data: Employee,
): ActionWith<Employee> {
  return {
    type: EmployeeActionTypes.CREATE_EMPLOYEE_SUCCEEDED,
    payload: data,
  };
}

function deleteEmployee(
  employeeId: number,
): ActionWith<number> {
  return {
    type: EmployeeActionTypes.DELETE_EMPLOYEE_REQUEST,
    payload: employeeId,
  };
}

function deleteEmployeeSucceeded(
  employeeId: number,
): ActionWith<number> {
  return {
    type: EmployeeActionTypes.DELETE_EMPLOYEE_SUCCEEDED,
    payload: employeeId,
  };
}

function loadJobList(): Action {
  return {
    type: EmployeeActionTypes.LOAD_JOB_LIST_REQUEST,
  };
}

function loadJobListSucceeded(
  data: Job[],
): ActionWith<Job[]> {
  return {
    type: EmployeeActionTypes.LOAD_JOB_LIST_SUCCEEDED,
    payload: data,
  };
}

export const EmployeeActions = {
  loadEmployeeList,
  loadEmployeeListSucceeded,
  createEmployee,
  createEmployeeSucceeded,
  deleteEmployee,
  deleteEmployeeSucceeded,
  loadJobList,
  loadJobListSucceeded,
};
