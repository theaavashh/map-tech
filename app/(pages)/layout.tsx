/*
import package from react 
*/
import React, { ReactNode } from 'react';

/*
type setup for children
*/
type LayoutType = {
  children: ReactNode;
};

/*
Default layout to all pages 
*/
const Layout = ({ children }: LayoutType) => {
  return <>{children}</>;
};

export default Layout;
