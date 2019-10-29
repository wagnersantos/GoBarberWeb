import axios from 'axios';
export function onResponseError(error) {
  const errorHasResponse = error && error.response;
  const message = 'Erro de servidor, Tente novamente mais tarde!';

  if (errorHasResponse && error.response.status === 422) {
    console.log(error.response.data.message);
  }

  if (
    errorHasResponse &&
    (error.response.status === 401 || error.response.status === 403)
  ) {
    console.log(error.response.data.message);
  }

  if (
    errorHasResponse &&
    error.response.status !== 401 &&
    error.response.status !== 403 &&
    error.response.status !== 422
  ) {
    console.log(message);
  }

  if (axios.isCancel(error)) {
    console.log(message);
  }

  return Promise.reject(error);
}

export const validateRequest = (config) => {
  // const token = getToken();
  // if (token) {
  //   // eslint-disable-next-line no-param-reassign
  //   config.headers.Authorization = `Bearer ${token}`;
  // }

  return config;
};
