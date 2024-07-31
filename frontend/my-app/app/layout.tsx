"use client"; // Ensure this file is treated as a Client Component

import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/index'; // Adjust the path as needed
import '../styles/globals.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en"> {/* Adding <html> tag */}
      <body>
        <Provider store={store}>
          <div>
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
