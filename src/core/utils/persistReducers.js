import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persitedReducer = persistReducer(
    {
      key: 'gobarber',
      storage,
      whitelist: ['auth', 'profile']
    },
    reducers
  );

  return persitedReducer;
};
