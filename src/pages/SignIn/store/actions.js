import { createAction } from 'redux-actions';
import {
  createType,
  createAsyncTypes,
  createAsyncActions
} from 'core/utils/reduxAsync';

export const types = {
  UPDATE_LOADERS: createType('auth', 'UPDATE_LOADERS'),
  SIGNIN: createAsyncTypes('auth', 'SIGNIN'),
  LOGOUT: createAsyncTypes('auth', 'LOGOUT')
};

export const actions = {
  updateLoaders: createAction(types.UPDATE_LOADERS),
  signIn: createAsyncActions(types.SIGNIN),
  logout: createAsyncActions(types.LOGOUT)
};
