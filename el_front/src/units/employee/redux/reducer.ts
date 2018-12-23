import { set } from 'monolite';

import { EmployeeState } from './../interfaces/redux-state';
import { RequestStatus } from '../../../common/enum';
import { reducerWrapper } from '../../../common/components/reducer-wrapper';
import { EmployeeActionTypes } from './action-types';
import { Employee, Job } from '../interfaces';


const INITIAL_STATE: EmployeeState = {
  employeeList: [],
  jobList: [],
  statuses: {
    loadEmployeeList: RequestStatus.Loaded,
    loadJobList: RequestStatus.Loaded,
    create: RequestStatus.Loaded,
    delete: RequestStatus.Loaded,
  },
};

export const employeeReducer = reducerWrapper(INITIAL_STATE, {
  [EmployeeActionTypes.LOAD_EMPLOYEE_LIST_REQUEST]: (state) => {
    return set(state, _ => _.statuses.loadEmployeeList, RequestStatus.Loading);
  },
  [EmployeeActionTypes.LOAD_EMPLOYEE_LIST_SUCCEEDED]: (state, payload: Employee[]) => {
    const modifiedState = set(state, _ => _.statuses.loadEmployeeList, RequestStatus.Loaded);
    return set(modifiedState, _ => _.employeeList, payload);
  },
  [EmployeeActionTypes.CREATE_EMPLOYEE_REQUEST]: (state) => {
    return set(state, _ => _.statuses.create, RequestStatus.Loading);
  },
  [EmployeeActionTypes.CREATE_EMPLOYEE_SUCCEEDED]: (state, payload: Employee) => {
    const modifiedState = set(state, _ => _.statuses.create, RequestStatus.Loaded);
    return set(modifiedState, _ => _.employeeList, [payload, ...state.employeeList]);
  },
  [EmployeeActionTypes.DELETE_EMPLOYEE_REQUEST]: (state) => {
    return set(state, _ => _.statuses.delete, RequestStatus.Loading);
  },
  [EmployeeActionTypes.DELETE_EMPLOYEE_SUCCEEDED]: (state, payload: number) => {
    const modifiedState = set(state, _ => _.statuses.delete, RequestStatus.Loaded);
    return set(modifiedState, _ => _.employeeList, modifiedState.employeeList.filter(e => e.id !== payload));
  },
  [EmployeeActionTypes.LOAD_JOB_LIST_REQUEST]: (state) => {
    return set(state, _ => _.statuses.loadJobList, RequestStatus.Loading);
  },
  [EmployeeActionTypes.LOAD_JOB_LIST_SUCCEEDED]: (state, payload: Job[]) => {
    const modifiedState = set(state, _ => _.statuses.loadJobList, RequestStatus.Loaded);
    return set(modifiedState, _ => _.jobList, payload);
  },
});
