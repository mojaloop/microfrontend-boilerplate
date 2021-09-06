import React from 'react';
import { Provider } from 'react-redux';
import { store, useSelector, ReduxContext } from 'store';
import { Menu } from 'components';
import { getIsFormEdited } from 'App/Editor/selectors';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

interface ExportMenuProps {
  path: string;
}

function MenuItems({ path }: ExportMenuProps) {
  const isFormEdited = useSelector(getIsFormEdited);

  const formLabel = `Form ${isFormEdited ? '(edited)' : ''}`;
  return (
    <>
      <Menu.Item path={`${path}/form`} label={formLabel} />
      <Menu.Item path={`${path}/resume`} label="Resume" />
      <Menu.Item path={`${path}/data`} label="Data" />
    </>
  );
}

export default function ExportMenu({ path }: ExportMenuProps) {
  return (
    <Provider store={store} context={ReduxContext}>
      <MenuItems path={path} />
    </Provider>
  );
}

export function AppMenu() {
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const path = match.url === '/' ? '' : match.url;
  return (
    <Menu path={path} pathname={location.pathname} onChange={history.push}>
      <ExportMenu path={path} />
    </Menu>
  );
}
