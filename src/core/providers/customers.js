import Api from './api';

export default {
  service: ({ path = '/', method = 'GET', params, cancelToken, ...rest }) =>
    Api.request(path, { method, params, cancelToken, ...rest })
};
