import React from 'react';
import { Provider } from 'react-redux';
import { PubSub, AuthConfig } from '@modusbox/microfrontend-utils';
import { store, ReduxContext } from './store';
import App from './App';
import { actions } from './App/Config';

interface ExportAppProps {
  authConfig?: AuthConfig;
  pubSub: PubSub;
}

export default function ExportApp({ authConfig, pubSub }: ExportAppProps) {
  if (authConfig) {
    store.dispatch(actions.setConfig(authConfig));
  }

  const unsubChannelA0 = pubSub.subscribe('channel-A', () => {
    // store.dispatch(actions.increaseCounter());
  });
  const unsubChannelA1 = pubSub.subscribe('channel-A', () => {
    // store.dispatch(actions.increaseCounter());
  });
  const unsubChannelB0 = pubSub.subscribe('channel-B', () => {
    // store.dispatch(actions.increaseCounter());
  });

  setTimeout(() => {
    unsubChannelA0();
    unsubChannelA1();
    unsubChannelB0();

    // eslint-disable-next-line
    console.log('unsubscribed');
  }, 1000);

  return (
    <Provider store={store} context={ReduxContext}>
      <App />
    </Provider>
  );
}

if (process.env.NODE_ENV !== 'development') {
  // eslint-disable-next-line
  console.info('Name', process.env.REACT_APP_NAME);

  // eslint-disable-next-line
  console.info('Version', process.env.REACT_APP_VERSION);

  // eslint-disable-next-line
  console.info('Commit', process.env.REACT_APP_COMMIT);
}
