import React from "react";
import { ImageInput } from "../ReduxForm/form";
import { Field, reduxForm } from "redux-form";

const BonafideForm = ({ handleSubmit, onSubmit, submitting }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="row">
        <div class="col-sm-6 text-center mx-auto">
          <div class="form-group">
            <Field
              name="request_document"
              placeholder="Upload Fee Receipt"
              className="uploadDocument"
              component={ImageInput}
              default="/static/images/document.png"
              message="Max Size 500KB."
            />
          </div>
        </div>
      </div>

      <div class="form-group text-center my-4">
        <button
          class="btn btn-success btn-lg"
          type="submit"
          disabled={submitting}
        >
          Apply for Bonafide Certificate
        </button>
      </div>
    </form>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.request_document) {
    errors.request_document = `Fee Receipt is required.`;
  }

  return errors;
};

export default reduxForm({
  form: "bonafideForm",
  validate,
})(BonafideForm);
