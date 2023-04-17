import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function NoAuthRoute({ authenticated, component: Component, role, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={
              role ? (role === "ROLE_STUDENT" ? "/student/" : "/admin/") : "/"
            }
          />
        )
      }
    />
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.User.authenticated,
  role: state.User.credentials.role,
});

export default connect(mapStateToProps)(NoAuthRoute);
