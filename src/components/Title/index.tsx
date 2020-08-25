import React, { FC } from 'react';
import './Title.css';

const Title: FC<{ size?: number }> = ({ children, size = 15 }) => (
  <span className="title" style={{ fontSize: size }}>
    {children}
  </span>
);
export default Title;
