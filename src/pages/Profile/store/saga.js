import { call, put, takeLatest, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

// import { Providers } from 'core/providers';
import { actions, types } from './actions';
import history from 'core/utils/history';

function* updateProfile({ payload }) {
  try {
    yield put(actions.updateLoaders({ profileLoading: true }));

    // const { name, email,avatar_id ...rest } = payload.data;
    // const profile = object.assign(
    //   { name, email ,avatar_id},
    //   rest.oldPassword ? rest : {}
    // );

    // const response = yield call(Providers, '', {
    //   action: 'LOGIN',
    //   path: `${typeData}`,
    //   method: 'POST',
    //   params: payload
    // });

    toast.success('Perfil atualizado com sucesso!');
    yield put(updateProfile.success(response.data));
  } catch (error) {
    toast.error('Erro ao atualizar perfil!');
    yield put(updateProfile.failure());
  } finally {
    yield put(actions.updateLoaders({ profileLoading: false }));
  }
}

export default function* root() {
  yield all([takeLatest(types.UPDATE_PROFILE.REQUEST, updateProfile)]);
}
