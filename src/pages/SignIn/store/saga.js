import { call, put, takeLatest, all } from 'redux-saga/effects';

import { Providers } from 'core/providers';
import { actions, types } from './actions';
import history from 'core/utils/history';

const typeData = 'login/signin';

function* signIn({ payload }) {
  try {
    yield put(actions.updateLoaders({ loginList: true }));

    // const response = yield call(Providers, '', {
    //   action: 'LOGIN',
    //   path: `${typeData}`,
    //   method: 'POST',
    //   params: payload
    // });

    // const { token, user } = response.data;

    // if (!user.provider) {
    //   console.tron.error('Usuario não é um prestador');
    //   return;
    // }

    yield put(actions.signIn.receive());

    history.push('/dashboard');
  } catch (error) {
    // throw error;
  } finally {
    yield put(actions.updateLoaders({ loginList: false }));
  }
}

function* logout({ payload }) {
  try {
    yield put(actions.updateLoaders({ loginList: true }));

    yield put(actions.getUser.receive());
  } catch (error) {
    // throw error;
  } finally {
    yield put(actions.updateLoaders({ loginList: false }));
  }
}

export default function* root() {
  yield all([
    takeLatest(types.SIGNIN.REQUEST, signIn),
    takeLatest(types.LOGOUT.REQUEST, logout)
  ]);
}
