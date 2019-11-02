import { handleActions } from 'redux-actions';
import { types } from 'pages/SignIn/store/actions';

const initialState = {
  profile: null
};

export default handleActions(
  {
    [types.SIGNIN.SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        profile: {
          name: 'Wagner Santos',
          email: 'wagtvc@gmail.com'
        }
      };
    }
  },
  initialState
);

export const selectors = {
  getProfile: (state) => state.profile.profile
};
