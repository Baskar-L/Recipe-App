// import React, { createContext, useEffect, useState } from 'react';
// import jwtDecode from 'jwt-decode';
// import api from '../utils/api';


// export const AuthContext = createContext();


// export const AuthProvider = ({ children }) => {
// const [user, setUser] = useState(null);
// const [loading, setLoading] = useState(true);


// useEffect(() => {
// const token = localStorage.getItem('token');
// if (token) {
// try {
// const decoded = jwtDecode(token);
// setUser({ ...decoded });
// } catch (err) {
// console.error('Invalid token', err);
// localStorage.removeItem('token');
// }
// }
// setLoading(false);
// }, []);


// const login = async (email, password) => {
// const res = await api.post('/auth/login', { email, password });
// const { token } = res.data;
// localStorage.setItem('token', token);
// const decoded = jwtDecode(token);
// setUser(decoded);
// return decoded;
// };


// const register = async (name, email, password, role = 'user') => {
// const res = await api.post('/auth/register', { name, email, password, role });
// const { token } = res.data;
// localStorage.setItem('token', token);
// const decoded = jwtDecode(token);
// setUser(decoded);
// return decoded;
// };


// const logout = () => {
// localStorage.removeItem('token');
// setUser(null);
// };


// return (
// <AuthContext.Provider value={{ user, loading, login, register, logout }}>
// {children}
// </AuthContext.Provider>
// );
// };




import React, { createContext, useEffect, useState } from "react";
// import jwtDecode from "jwt-decode";

import { jwtDecode } from "jwt-decode";

import api from "../utils/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if token exists on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);

        // optional: check if token expired
        if (decoded.exp * 1000 < Date.now()) {
          localStorage.removeItem("token");
        } else {
          setUser(decoded);
        }
      } catch (err) {
        console.error("Invalid token", err);
        localStorage.removeItem("token");
      }
    }
    setLoading(false);
  }, []);

  // ✅ Login
  const login = async (email, password) => {
    try {
      const res = await api.post("/auth/login", { email, password });
      const { token } = res.data;
      localStorage.setItem("token", token);
      const decoded = jwtDecode(token);
      setUser(decoded);
      return decoded;
    } catch (err) {
      throw err.response?.data?.message || "Login failed";
    }
  };

  // ✅ Register
  const register = async (name, email, password, role = "user") => {
    try {
      const res = await api.post("/auth/register", { name, email, password, role });
      const { token } = res.data;
      localStorage.setItem("token", token);
      const decoded = jwtDecode(token);
      setUser(decoded);
      return decoded;
    } catch (err) {
      throw err.response?.data?.message || "Registration failed";
    }
  };

  // ✅ Logout
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
