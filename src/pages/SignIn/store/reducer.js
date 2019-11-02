import { handleActions } from 'redux-actions';
import { types } from './actions';

const initialState = {
  token: null,
  signed: false,
  loaders: {
    authLoading: false
  }
};

export default handleActions(
  {
    [types.UPDATE_LOADERS]: (state, { payload }) => ({
      ...state,
      loaders: { ...state.loaders, ...payload }
    }),

    [types.SIGNIN.SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        token: payload,
        signed: true
      };
    },

    [types.LOGOUT]: (state) => {
      return {
        ...state,
        token: null,
        signed: false
      };
    }
  },
  initialState
);

export const selectors = {
  getLoaders: (state) => state.auth.loaders
};
