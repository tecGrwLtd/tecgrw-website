import React from 'react';

import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#231f1f]">
      {/* <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">  to avoid restricting hero sections' width */}
        {children}
      {/* Footer */}
      <Footer />
      {/* </main> */}

    </div>
  );
} 