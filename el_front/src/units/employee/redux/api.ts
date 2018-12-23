import { Job } from './../interfaces/job';
import { ServerApi } from './../../../common/server/index';
import { Employee, EmployeeFormModel } from '../interfaces';

const loadEmployeeList = () => ServerApi.get<Employee[]>('/employee/load-list');
const loadJobList = () => ServerApi.get<Job[]>('/job/load-list');
const createEmployee = (data: EmployeeFormModel) => ServerApi.post<Employee>('/employee/create', data);
const deleteEmployee = (emplId: number) => ServerApi.delete<Employee[]>(`/employee/delete/${emplId}`);

export const EmployeeApi = {
  loadEmployeeList,
  loadJobList,
  createEmployee,
  deleteEmployee,
};
