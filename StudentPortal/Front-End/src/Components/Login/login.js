import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import Loading from "../../Util/Loading";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userAction";
import { Field, reduxForm } from "redux-form";
import { selectInput, textInput } from "../ReduxForm/form";


function Login(props) {
  const { loginUser, history } = props;
  const { loading, errors } = props.UI;
  const [label, setLabel] = useState("Enrollment No:");
  const [placeholder, setPlaceholder] = useState("Enter Your Enrollment No...");

  const onRoleChange = (e) => {
    const type = e.target.value;
    if (type === "ADMIN") {
      setPlaceholder("Enter Your Id...");
      setLabel("Department Id:");
    } else {
      setPlaceholder("Enter Your Enrollment No...");
      setLabel("Enrollment No:");
    }
    console.log(e);
  };

  const onSubmit = (values) => {
    loginUser(values, history);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4 mx-auto mx-auto">
          <form
            id="loginForm"
            className="regForm"
            onSubmit={props.handleSubmit(onSubmit)}
          >
            <h2 className="form-title text-center">Login</h2>

            {(errors.error || errors.string) && (
              <div
                className="comment alert alert-danger"
                style={{ textAlign: "center" }}
                id="error_message"
              >
                <strong>Invalid Credentials</strong>
              </div>
            )}
            <div className="form-group">
              <Field
                name="type"
                label="Role:"
                placeholder="Select Role"
                component={selectInput}
                options={{
                  Student: "STUDENT",
                  Admin: "ADMIN",
                }}
                onChange={onRoleChange}
              />
            </div>
            <div className="form-group">
              <Field
                type="text"
                name="username"
                label={label}
                placeholder={placeholder}
                component={textInput}
                require="true"
              />
            </div>
            <div className="form-group">
              <Field
                type="password"
                name="password"
                label="Password:"
                placeholder="Enter Password."
                component={textInput}
                require="true"
              />
            </div>
            <div className="form-group">
              <Link to="forgotPassword">Forgot Password?</Link>
            </div>

            <div className="form-group text-center">
              {loading ? (
                <Loading></Loading>
              ) : (
                <button type="submit" className="btn btn-success">
                  Login
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const validate = (values) => {
  const errors = {};
  if (!values.type) {
    errors.type = "Please Select Role";
  }
  if (!values.username) {
    errors.username = "Please Enter Username";
  }
  if (!values.password) {
    errors.password = "Please Enter Password";
  }
  return errors;
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});

const LoginForm = reduxForm({
  form: "loginForm",
  initialValues: { type: "STUDENT" },
  validate,
})(Login);

export default connect(mapStateToProps, { loginUser })(LoginForm);
