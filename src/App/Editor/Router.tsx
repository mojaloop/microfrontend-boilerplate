import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Data from './views/Data';
import Form from './views/Form';
import Resume from './views/Resume';

interface EditorProps {
  basePath?: string;
}

function Editor({ basePath = '' }: EditorProps) {
  return (
    <Switch>
      <Route path={`${basePath}/form`}>
        <Form />
      </Route>
      <Route path={`${basePath}/resume`} component={Resume} />
      <Route path={`${basePath}/data`}>
        <Data />
      </Route>
      <Route path={`${basePath}`}>
        <Redirect to={`${basePath}/form`} />
      </Route>
    </Switch>
  );
}

export default Editor;
