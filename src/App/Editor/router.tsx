import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NameForm from './views/NameForm';
import Resume from './views/Resume';

interface EditorProps {
  basePath?: string;
}

const Editor: FC<EditorProps> = ({ basePath = '' }) => {
  return (
    <Switch>
      <Route path={`${basePath}/form`} component={NameForm} />
      <Route path={`${basePath}/resume`} component={Resume} />
      <Route path={`${basePath}`}>
        <Redirect to={`${basePath}/form`} />
      </Route>
    </Switch>
  );
};

export default Editor;
