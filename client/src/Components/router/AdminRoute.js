import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const AdminRoute = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem("token");
  const user = useSelector((state) => state.userReducer.user);
  const role = user && user.role ;
  if (isAuth && role == "admin") {
    return <Route exact component={Component} {...rest} />;
  }

  return <Redirect to="/" />;
};

export default AdminRoute;
