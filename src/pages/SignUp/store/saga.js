import { call, put, takeLatest, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

// import { Providers } from 'core/providers';
import { actions, types } from './actions';
import history from 'core/utils/history';

function* signUp({ payload }) {
  try {
    yield put(actions.updateLoaders({ signupLoading: true }));

    // const response = yield call(Providers, '', {
    //   action: 'LOGIN',
    //   path: `${typeData}`,
    //   method: 'POST',
    //   params: payload
    // });

    // const { token, user } = response.data;

    // if (!user.provider) {
    // toast.error('Usuario não é um prestador');
    //   return;
    // }

    history.push('/');
  } catch (error) {
    toast.error('Falha no cadastro, verifique seus dados!');
  } finally {
    yield put(actions.updateLoaders({ signupLoading: false }));
  }
}

export default function* root() {
  yield all([takeLatest(types.SIGNUP.REQUEST, signUP)]);
}
