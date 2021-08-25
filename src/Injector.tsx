import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './App';
import { actions, AuthConfig } from './App/Config';

interface ExportAppProps {
  token?: string;
  authConfig?: AuthConfig;
}

const store = configureStore(null, {
  isDevelopment: process.env.NODE_ENV === 'development',
});

export default function ExportApp({ token, authConfig }: ExportAppProps) {
  if (authConfig) {
    store.dispatch(actions.setConfig(authConfig));
  }

  return (
    <Provider store={store}>
      <App token={token} />
    </Provider>
  );
}
