import { employeeReducer } from '../units/employee/redux';
import { commonReducer } from '../common/redux';

export const rootReducer = {
  employee: employeeReducer,
  common: commonReducer,
};
