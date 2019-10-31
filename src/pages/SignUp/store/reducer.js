import { handleActions } from 'redux-actions';
import { types } from './actions';

const initialState = {
  token: null,
  signed: false,
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
        ...state,
        token: payload,
        signed: true
      };
    }
  },
  initialState
);

export const selectors = {
  getLoaders: (state) => state.signup.loaders
};
