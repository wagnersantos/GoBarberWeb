import { createAction } from 'redux-actions';
import {
  createType,
  createAsyncTypes,
  createAsyncActions
} from 'core/utils/reduxAsync';

export const types = {
  UPDATE_LOADERS: createType('signup', 'UPDATE_LOADERS'),
  SIGNUP: createAsyncTypes('signup', 'SIGNIN')
};

export const actions = {
  updateLoaders: createAction(types.UPDATE_LOADERS),
  signIn: createAsyncActions(types.SIGNUP)
};
