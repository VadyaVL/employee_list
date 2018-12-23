import { fork, all } from 'redux-saga/effects';

import { employeeSaga } from '../units/employee/redux';

export function* rootSaga(): any {
  yield all([
    fork(employeeSaga),
  ]);
}
