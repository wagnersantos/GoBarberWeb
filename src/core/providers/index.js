import axios from 'axios';
import Customers from './customers';

export const Providers = ({
  path,
  method,
  params,
  timeout = 10000,
  ...rest
}) => {
  const abort = axios.CancelToken.source();
  const cancelTimeOut = setTimeout(() => abort.cancel(), timeout);

  const variables = {
    path,
    method,
    params,
    cancelToken: abort.token,
    ...rest
  };

  return () =>
    Customers.service(variables).then((response) => {
      clearTimeout(cancelTimeOut);
      return response;
    });
};
