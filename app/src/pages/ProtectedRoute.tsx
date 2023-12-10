import React from "react";

import { Navigate, Outlet } from "react-router-dom";

import { useUser } from "@/providers/UserProvider";

const ProtectedRoute: React.FC = () => {
  const { user } = useUser();
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
