import React, { ReactNode } from "react";
import { Footer, Navbar } from ".";

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <div className="relative">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
