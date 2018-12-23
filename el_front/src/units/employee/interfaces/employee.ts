import { Job } from './job';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  jobs: Job[];
  employmentDate: string; // DateTime - maybe, it must be as part of Job model
  rate: number;
  creationDate: string;   // DateTime
}

export interface EmployeeFormModel {
  firstName: string;
  lastName: string;
  employmentDate: string;
  rate: number;
  jobs: number[];
}
