import { createAction } from 'redux-actions';
import {
  createType,
  createAsyncTypes,
  createAsyncActions
} from 'core/utils/reduxAsync';

export const types = {
  UPDATE_LOADERS: createType('signup', 'UPDATE_LOADERS'),
  UPDATE_PROFILE: createAsyncTypes('profile', 'UPDATE_PROFILE')
};

export const actions = {
  updateLoaders: createAction(types.UPDATE_LOADERS),
  updateProfile: createAsyncActions(types.UPDATE_PROFILE)
};
