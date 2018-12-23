import { Action } from 'redux';

export interface ActionWith<TPayload> extends Action {
  payload: TPayload,
}
