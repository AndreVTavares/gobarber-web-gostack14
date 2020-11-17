import React from 'react';
import { Toast } from '../components/ToastContainer/styles';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => {
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>;
};

export default AppProvider;
