import React from "react";
import { ImageInput, textInput, selectInput } from "../ReduxForm/form";
import { Field, reduxForm } from "redux-form";
import { YEAR } from "../Registration/data";

const RankForm = ({ handleSubmit, onSubmit, submitting }) => {
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
              type="number"
              name="cgpa"
              label="CGPA:"
              placeholder="99.00"
              component={textInput}
              require
            />
          </div>
        </div>
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
          Apply for Rank Certificate
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
  if (!values.cgpa) {
    errors.cgpa = "CGPA is required";
  } else if (!values.cgpa.match(/^[0-9]{1,2}\.[0-9]{1,2}$/)) {
    errors.cgpa = `Please enter your valid CGPA.`;
  }

  return errors;
};

export default reduxForm({
  form: "rankForm",
  validate,
})(RankForm);
