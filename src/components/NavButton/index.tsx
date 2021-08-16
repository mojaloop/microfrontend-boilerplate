import React from 'react';
import { useLocation } from 'react-router-dom';
import './NavButton.css';

interface NavButtonProps {
  link: string;
  onClick: (link: string) => void;
  children: React.ReactNode;
}

export default function NavButton({ link, onClick, children }: NavButtonProps) {
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
}
