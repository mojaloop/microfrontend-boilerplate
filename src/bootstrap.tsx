import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from './store';
import App from './App';

const history = createBrowserHistory();
const store = configureStore(history, {
  isDevelopment: process.env.NODE_ENV === 'development',
});

const ConnectedApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history} context={ReactReduxContext}>
      <App />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));
