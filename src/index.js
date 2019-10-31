import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import 'config/ReactotronConfig';

import { GlobalStyle } from 'core/assets/style/global';
import theme from 'core/assets/style/theme';
import { store, persistor } from './store';
import Routes from './routes';

const renderApp = () => {
  const app = (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );

  render(app, document.getElementById('root'));
};

renderApp();
