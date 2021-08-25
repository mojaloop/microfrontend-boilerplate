import React from 'react';
import { Menu } from 'components';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

interface ExportMenuProps {
  path: string;
}

export default function ExportMenu({ path }: ExportMenuProps) {
  return (
    <>
      <Menu.Item path={`${path}/form`} label="Form" />
      <Menu.Item path={`${path}/resume`} label="Resume" />
      <Menu.Item path={`${path}/data`} label="Data" />
    </>
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
