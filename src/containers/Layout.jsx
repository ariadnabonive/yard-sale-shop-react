import React from "react";
import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <div classname="Layout">
      <Header />
        {children}
    </div>
  );
};
export default Layout;
