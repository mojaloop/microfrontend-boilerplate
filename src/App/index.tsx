import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Title, Tabs, Tab } from 'components';

import Editor from './Editor';
import { useBasePath } from './hooks';

interface WelcomeProps {
  basePath: string;
}

const Welcome: FC<WelcomeProps> = ({ basePath }) => (
  <div style={{ padding: '10px' }}>
    <Title>
      <strong>Welcome!</strong>
      <br />
      App is mounted on <code>{basePath || '/'}</code> and will automatically redirect to{' '}
      <code>{basePath}/form</code>
    </Title>
  </div>
);

interface TabProps {
  onTabClick: (link: string) => void;
  basePath: string;
  pathname: string;
}

const Navigator: FC<TabProps> = ({ pathname, basePath, onTabClick }) => {
  const views = ['form', 'resume', 'data'];
  const viewIndex = views.indexOf(pathname.replace(basePath, '').substring(1));
  const selected = viewIndex !== -1 ? viewIndex : undefined;

  return (
    <div>
      <div key="filter__tabs">
        <Tabs
          selected={selected}
          onSelect={(evt) => {
            onTabClick(evt.target.innerHTML.toLowerCase());
          }}
        >
          <Tab key="form">form</Tab>
          <Tab key="resume">resume</Tab>
          <Tab key="data">data</Tab>
        </Tabs>
      </div>
    </div>
  );
};

interface AppProps {
  token?: string;
}

const App: FC<AppProps> = ({ token = '' }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const basePath = useBasePath();

  return (
    <>
      <Welcome basePath={basePath} />
      <Navigator onTabClick={history.push} basePath={basePath} pathname={pathname} />
      <Editor basePath={basePath} token={token} />
    </>
  );
};

export { App };
export default App;
