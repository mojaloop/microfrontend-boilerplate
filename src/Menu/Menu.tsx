import React from 'react';
import { Menu, MenuProps } from 'components';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

export default function ExportMenu({ path, pathname, onChange }: Omit<MenuProps, 'children'>) {
  return (
    <Menu path={path} pathname={pathname} onChange={onChange}>
      <Menu.Item path={`${path}/form`} label="Form" />
      <Menu.Item path={`${path}/resume`} label="Resume" />
      <Menu.Item path={`${path}/data`} label="Data" />
    </Menu>
  );
}

export function AppMenu() {
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  return (
    <ExportMenu
      path={match.url === '/' ? '' : match.url}
      pathname={location.pathname}
      onChange={history.push}
    />
  );
}
