import { Navigate, Route } from "react-router";

const Authenticated = ({ component: Component, ...rest }) => {
  const isAuthenticated = sessionStorage.getItem("token");

  return (
    <Route {...rest} render={(props) => (isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />)} />
  );
};

export default Authenticated;
