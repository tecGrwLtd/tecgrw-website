import React from 'react';

import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#231f1f]">
      {children}
      <Footer />

    </div>
  );
}
export default Layout;
