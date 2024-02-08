import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  const isAuthenticated = sessionStorage.getItem("token");

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
