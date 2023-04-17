import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/actions/userAction";
import jwt_decode from "jwt-decode";
import store from "../redux/store"
function AuthRoute({ authenticated, component: Component, ...rest }) {

  const token = localStorage.getItem("token");

  if (token) {
    if (jwt_decode(token).exp < Date.now() / 1000) {
      store.dispatch(logout());
    }
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
            <Redirect to="/login" />
          )
      }
    />
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.User.authenticated,
});

export default connect(mapStateToProps)(AuthRoute);
