import React, { Context } from 'react';
import { ReactReduxContextValue } from 'react-redux';

export default React.createContext(null) as unknown as Context<ReactReduxContextValue>;
