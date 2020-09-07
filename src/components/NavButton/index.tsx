import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import './NavButton.css';

interface NavButtonProps {
  link: string;
  onClick: (link: string) => void;
}
export const NavButton: FC<NavButtonProps> = ({ link, onClick, children }) => {
  const location = useLocation();
  const active = location.pathname.startsWith(link);
  return (
    <button
      className={`nav-button ${active ? 'nav-button--active' : ''}`}
      onClick={() => onClick(link)}
      type="button"
    >
      {children}
    </button>
  );
};

export default NavButton;
