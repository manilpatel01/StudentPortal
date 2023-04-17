import React from "react";
import { ImageInput, selectInput } from "../ReduxForm/form";
import { Field, reduxForm } from "redux-form";
import { YEAR } from "../Registration/data";

const CharacterForm = ({ handleSubmit, onSubmit, submitting }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="row">
        <div class="col-sm-6 text-center mx-auto">
          <div class="form-group">
            <Field
              name="request_document"
              placeholder="Upload Marksheet"
              className="uploadDocument"
              component={ImageInput}
              default="/static/images/document.png"
              message="Max Size 500KB."
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 mx-auto">
          <div class="form-group">
            <Field
              name="graduation_year"
              label="Graduation Year:"
              placeholder="Select Graduation Year"
              component={selectInput}
              options={YEAR}
              data-live-search="on"
              require
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
          Apply for Character Certificate
        </button>
      </div>
    </form>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.request_document) {
    errors.request_document = "Marksheet is required.";
  }
  if (!values.graduation_year) {
    errors.graduation_year = "Graduation Year is required.";
  }

  return errors;
};

export default reduxForm({
  form: "characterForm",
  validate,
})(CharacterForm);
