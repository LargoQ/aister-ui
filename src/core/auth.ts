// File: /src/core/auth.ts
import React, { createContext, useContext, useState, ReactNode, ReactElement } from 'react';
import { Linking } from 'react-native';

interface AuthContextType {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
  checkAuthorization: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }): ReactElement => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const checkAuthorization = () => {
    if (!isLoggedIn) {
      // Replace this with your actual backend login URL
      const backendLoginUrl = 'http://localhost:8000/v1.0/api/login';
      Linking.openURL(backendLoginUrl);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, checkAuthorization }}>
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
