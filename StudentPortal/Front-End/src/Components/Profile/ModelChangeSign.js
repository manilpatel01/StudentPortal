import React from "react";
import { Field, reduxForm } from "redux-form";
import { ImageInput } from "../ReduxForm/form";
import { changePhotoOrSign } from "../../redux/actions/userAction";
import { connect } from "react-redux";

function ModelChangeSign(props) {
  const { errors } = props.UI;
  const { submitting } = props;
  const onSubmit = async (values) => {
    await props.changePhotoOrSign(values, props.domain);
    if (!errors.error) {
      document.getElementById("close-modal-sign").click();
    }
  };
  return (
    <div
      className="modal fade"
      id="change_sign"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="change_sign_title"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="change_sign_title">
              Change Sign
            </h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form id="changeSignForm" onSubmit={props.handleSubmit(onSubmit)}>
              <div className="form-group text-center">
                <Field
                  name="sign"
                  placeholder="Add Sign"
                  component={ImageInput}
                  default={props.sign}
                  message="Sign only on white page. Max Size 500KB."
                />
              </div>
              {errors.error && (
                <div
                  class="comment alert alert-danger"
                  style={{ textAlign: "center" }}
                  id="error_message"
                >
                  <strong>Server Error</strong>
                </div>
              )}
              <div className="modal-footer">
                <button
                  type="submit"
                  name="submit"
                  className="btn btn-success"
                  disabled={submitting}
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  id="close-modal-sign"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const validate = (values) => {
  const errors = {};
  if (!values.sign) {
    errors.sign = "Please Select Sign";
  }
  return errors;
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});

const ModelChangeSignForm = reduxForm({
  form: "changeSignForm",
  validate,
})(ModelChangeSign);

const mapActionToProps = {
  changePhotoOrSign,
};

export default connect(mapStateToProps, mapActionToProps)(ModelChangeSignForm);
