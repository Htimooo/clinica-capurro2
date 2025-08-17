import React, { createContext, useContext, useState } from 'react';
import * as api from './api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('authUser');
    return stored ? JSON.parse(stored) : null;
  });

  const login = async (email, password) => {
    try {
      const data = await api.login(email, password);
      const userData = { email: data.email, token: data.token, role: data.role };
      setUser(userData);
      localStorage.setItem('authUser', JSON.stringify(userData));
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message };
    }
  };

  const loginWithGoogle = () => {
    api.loginWithGoogle();
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
  };

  const register = async (email, password, role) => {
    try {
      await api.register(email, password, role);
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message };
    }
  };

  const changePassword = async (currentPassword, newPassword) => {
    if (!user) throw new Error('Sin sesión');
    await api.changePassword(user.token, currentPassword, newPassword);
  };

  const requestPasswordReset = async (email) => {
    await api.forgotPassword(email);
  };

  const value = {
    user,
    login,
    loginWithGoogle,
    logout,
    register,
    changePassword,
    requestPasswordReset,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
