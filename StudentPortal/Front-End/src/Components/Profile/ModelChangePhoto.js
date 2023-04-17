import React from "react";
import { Field, reduxForm } from "redux-form";
import { ImageInput } from "../ReduxForm/form";
import { changePhotoOrSign } from "../../redux/actions/userAction";
import { connect } from "react-redux";

function ModelChangePhoto(props) {
  const { errors } = props.UI;
  const onSubmit = async (values) => {
    await props.changePhotoOrSign(values, props.domain);
    console.log(errors);
    if (!errors.error) {
      document.getElementById("close-modal-photo").click();
    }
  };

  return (
    <div
      class="modal fade"
      id="change_photo"
      tabindex="-1"
      role="dialog"
      aria-labelledby="change_photo_title"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="change_photo_title">
              Change Photo
            </h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <form id="changePhotoForm" onSubmit={props.handleSubmit(onSubmit)}>
              <div class="form-group text-center">
                <Field
                  name="photo"
                  placeholder="Add Photo"
                  component={ImageInput}
                  default={props.photo}
                  message="Max Size 500KB."
                />
              </div>

              <div class="modal-footer">
                <button type="submit" name="submit" class="btn btn-success">
                  Save Changes
                </button>
                <button
                  type="button"
                  id="close-modal-photo"
                  class="btn btn-danger"
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
  if (!values.photo) {
    errors.photo = "Please Select Photo";
  }
  return errors;
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});

const ModelChangePhotoForm = reduxForm({
  form: "changePhotoForm",
  validate,
})(ModelChangePhoto);
const mapActionToProps = {
  changePhotoOrSign,
};

export default connect(mapStateToProps, mapActionToProps)(ModelChangePhotoForm);
