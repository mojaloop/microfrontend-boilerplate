import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Layout } from 'components';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { ReduxContext } from './store';
import App from './App';
import { AppMenu } from './Menu';

const history = createBrowserHistory();
const store = configureStore(history, {
  isDevelopment: process.env.NODE_ENV === 'development',
});

const ConnectedApp = () => (
  <Provider store={store} context={ReduxContext}>
    <ConnectedRouter history={history} context={ReduxContext}>
      <Layout>
        <Layout.Content>
          <Layout.SideMenu>
            <AppMenu />
          </Layout.SideMenu>
          <Layout.Page>
            <App />
          </Layout.Page>
        </Layout.Content>
      </Layout>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));
