import { fork, all } from 'redux-saga/effects';
import { makeRestartable } from 'core/utils/saga';
import AuthSaga from 'pages/SignIn/store/saga';

const root = makeRestartable(function* run() {
  yield all([fork(AuthSaga)]);
});

export default root;
