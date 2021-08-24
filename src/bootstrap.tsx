import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Layout } from 'components';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from './store';
import App from './App';
import { AppMenu } from './Menu';

const history = createBrowserHistory();
const store = configureStore(history, {
  isDevelopment: process.env.NODE_ENV === 'development',
});

const ConnectedApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history} context={ReactReduxContext}>
      <Layout>
        <Layout.Content>
          <Layout.SideMenu>
            <AppMenu />
          </Layout.SideMenu>
          <Layout.Page>
            Test
            <App />
          </Layout.Page>
        </Layout.Content>
      </Layout>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));
