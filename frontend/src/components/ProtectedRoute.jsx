// import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';


// export default function ProtectedRoute({ children, role }) {
//     const { user, loading } = useContext(AuthContext);


//     if (loading) return null; // or a spinner


//     if (!user) return <Navigate to="/login" replace />;


//     if (role && user.role !== role) {
//         // if role mismatch, redirect to home
//         return <Navigate to="/" replace />;
//     }


//     return children;
// }



import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children, role }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;

  if (!user) return <Navigate to="/login" replace />;

  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
