import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  const login = (email, token) => {
    setEmail(email);
    setToken(token);
  };

  const logout = () => {
    setEmail(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ email, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};