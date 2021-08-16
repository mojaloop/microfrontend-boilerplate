import React from 'react';
import './Title.css';

interface TitleProps {
  size?: number;
  children: React.ReactNode;
}

export default function Title({ children, size = 15 }: TitleProps) {
  return (
    <span className="title" style={{ fontSize: size }}>
      {children}
    </span>
  );
}
