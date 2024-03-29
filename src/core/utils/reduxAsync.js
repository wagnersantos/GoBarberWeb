import { createAction } from 'redux-actions';

export const createType = (stateKey, type) => `gobarber/${stateKey}/${type}`;

export const createAsyncTypes = (stateKey, type) => ({
  REQUEST: `${createType(stateKey, type)}_REQUEST`,
  SUCCESS: `${createType(stateKey, type)}_SUCCESS`,
  FAILURE: `${createType(stateKey, type)}_FAILURE`
});

export const createAsyncActions = (asyncTypes) => ({
  request: createAction(asyncTypes.REQUEST),
  receive: createAction(asyncTypes.SUCCESS),
  error: createAction(asyncTypes.FAILURE)
});
