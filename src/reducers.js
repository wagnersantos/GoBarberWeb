import { combineReducers } from 'redux';

import auth from 'pages/SignIn/store/reducer';
import profile from 'pages/Profile/store/reducer';
import signup from 'pages/SignUp/store/reducer';

export default combineReducers({
  auth,
  profile,
  signup
});
