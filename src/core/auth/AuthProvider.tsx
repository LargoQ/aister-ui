// File: /src/core/AuthProvider.tsx

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Linking } from 'react-native';

interface AuthContextType {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
  checkAuthorization: () => void;
  handleAccessToken: (accessToken: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleAccessToken = (accessToken: string) => {
    console.log('Received access token:', accessToken);
    setLoggedIn(true);
  };

  const checkAuthorization = () => {
    if (!isLoggedIn) {
      const backendLoginUrl = 'http://localhost:8000/auth/azure/login';
      Linking.openURL(backendLoginUrl);
    } else {
      console.log('User is already logged in');
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, checkAuthorization, handleAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
