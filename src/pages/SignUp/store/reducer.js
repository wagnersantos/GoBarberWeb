import { handleActions } from 'redux-actions';
import { types } from './actions';

const initialState = {
  loaders: {
    signupLoading: false
  }
};

export default handleActions(
  {
    [types.UPDATE_LOADERS]: (state, { payload }) => ({
      ...state,
      loaders: { ...state.loaders, ...payload }
    }),
    [types.SIGNUP.SUCCESS]: (state, { payload }) => {
      return {
        ...state
      };
    }
  },
  initialState
);

export const selectors = {
  getLoaders: (state) => state.signup.loaders
};
