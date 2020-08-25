import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { NavButton, Title } from 'components';
import Editor from './Editor';
import { useBasePath } from './hooks';

const App: FC<unknown> = () => {
  const history = useHistory();
  const basePath = useBasePath();

  return (
    <>
      <Welcome basePath={basePath} />
      <Nav onLinkClick={history.push} basePath={basePath} />
      <Editor basePath={basePath} />
    </>
  );
};

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

interface NavProps {
  onLinkClick: (link: string) => void;
  basePath: string;
}

const Nav: FC<NavProps> = ({ onLinkClick, basePath = '' }) => (
  <div>
    <NavButton onClick={onLinkClick} link={`${basePath}/form`}>
      Form
    </NavButton>
    <NavButton onClick={onLinkClick} link={`${basePath}/resume`}>
      Resume
    </NavButton>
  </div>
);

export { App };
export default App;
