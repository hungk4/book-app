import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  if (currentUser) {
    return children;
  }

  if (loading) {
    return <div>Loading...</div>; // Hoặc spinner
  }

  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
