import { handleActions } from 'redux-actions';

import { types } from './actions';
import { types as typesSignIn } from 'pages/SignIn/store/actions';

const initialState = {
  profile: null,
  loaders: {
    profileLoading: false
  }
};

export default handleActions(
  {
    [typesSignIn.SIGNIN.SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        profile: {
          name: 'Wagner Santos',
          email: 'wagtvc@gmail.com'
        }
      };
    },

    [typesSignIn.LOGOUT]: (state, { payload }) => {
      return {
        ...state,
        profile: null
      };
    },

    [types.UPDATE_PROFILE.SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        profile: payload
      };
    }
  },
  initialState
);

export const selectors = {
  getProfile: (state) => state.profile.profile
};
