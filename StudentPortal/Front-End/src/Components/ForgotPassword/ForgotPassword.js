import React, { useState, useEffect } from "react";
import Loading from "../../Util/Loading";
import { connect } from "react-redux";
import { forgotPasswordAction } from "../../redux/actions/userAction";
import { Field, reduxForm } from "redux-form";
import { selectInput, textInput } from "../ReduxForm/form";

function ForgotPassword(props) {
  const { loading, errors, success, successMessage } = props.UI;
  const [label, setLabel] = useState("Enrollment No:");
  const [placeholder, setPlaceholder] = useState("Enter Your Enrollment No...");
  const { forgotPasswordAction } = props;
  const [maskEmail, setMaskEmail] = useState(null);
  useEffect(() => {
    if (successMessage.email) {
      let str = successMessage.email;
      let finalArr = [];
      str = str.split("");
      let len = str.indexOf("@");
      str.forEach((item, pos) => {
        pos >= 2 && pos <= len - 3
          ? finalArr.push("*")
          : finalArr.push(str[pos]);
      });
      setMaskEmail(finalArr.join(""));
    }
  }, [successMessage]);
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

  const onSubmit = async (values) => {
    const formData = new FormData();
    Object.keys(values).forEach((field, index) => {
      formData.append(field, values[field]);
    });
    await forgotPasswordAction(formData);

    // history.pushState('/login')
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4 mx-auto mx-auto">
          <form
            id="forgotPassword"
            className="regForm"
            onSubmit={props.handleSubmit(onSubmit)}
          >
            <h2 className="form-title text-center">ForgotPassword</h2>
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
                require
              />
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
            {loading === true ? (
              <Loading />
            ) : (
                errors.error && (
                  <div class="alert alert-danger" style={{ textAlign: "center" }}>
                    Username Not Found
                  </div>
                )
              )}
            {success && (
              <div class="alert alert-success" style={{ textAlign: "center" }}>
                <p>username and password sent to this email</p>
                {successMessage.email && maskEmail}
              </div>
            )}
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
  return errors;
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});

const ForgotPasswordForm = reduxForm({
  form: "forgotPassword",
  initialValues: { type: "STUDENT" },
  validate,
})(ForgotPassword);

export default connect(mapStateToProps, { forgotPasswordAction })(
  ForgotPasswordForm
);
