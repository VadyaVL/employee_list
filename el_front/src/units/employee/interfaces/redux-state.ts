import { Job } from './job';
import { Employee } from './employee';
import { RequestStatus } from '../../../common/enum';

export interface EmployeeState {
  employeeList: Employee[];
  jobList: Job[];
  statuses: {
    loadEmployeeList: RequestStatus;
    loadJobList: RequestStatus;
    create: RequestStatus;
    delete: RequestStatus;
  };
}
