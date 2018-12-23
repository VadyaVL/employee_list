import { set } from 'monolite';

import { CommonState } from './../interfaces/redux-state';
import { reducerWrapper } from '../components/reducer-wrapper';
import { CommonActionTypes } from './action-types';

const INITIAL_STATE: CommonState = {
  dialog: {},
};

export const commonReducer = reducerWrapper(INITIAL_STATE, {
  [CommonActionTypes.OPEN_DIALOG]: (state, payload: string) => set(state, _ => _.dialog[payload], true),
  [CommonActionTypes.CLOSE_DIALOG]: (state, payload: string) => set(state, _ => _.dialog[payload], false),
});
