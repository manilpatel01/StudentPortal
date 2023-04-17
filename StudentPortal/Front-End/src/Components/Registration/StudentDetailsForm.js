import React, { useEffect, useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './studentFormValidate';

import {
  textInput,
  selectInput,
  ImageInput,
  scrollToFirstError,
} from '../ReduxForm/form';
import {
  CASTE,
  GENDER,
  ADDMISSION_CATEGORIES,
  YEAR,
  SEMESTER,
  BRANCH_BE,
  BRANCH_PDDC,
  BRANCH_PG,
  COURSE,
  BRANCH_MCA,
} from './data';

const StudentDetailsForm = (props) => {
  const { handleSubmit, isUpdate, disableEmail } = props;
  const [BRANCH, setBRANCH] = useState({ 'Please Select Course First': '' });
  useEffect(() => {
    if (isUpdate) {
      onCourseChange({ target: { value: props.initialValues.course } });
    }
  }, [props.initialValues]);

  const onCourseChange = (e) => {
    switch (e.target.value) {
      case 'BE':
        setBRANCH(BRANCH_BE);
        break;
      case 'PDDC':
        setBRANCH(BRANCH_PDDC);
        break;
      case 'PG':
        setBRANCH(BRANCH_PG);
        break;
      case 'MCA':
        setBRANCH(BRANCH_MCA);
        break;
      default:
        setBRANCH({ 'Please Select Course First': '' });
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4 text-center text-primary">Student Details</h2>

      <div className="form-group">
        <Field
          type="email"
          name="email"
          label="Email Id:"
          placeholder="Enter Email Id"
          component={textInput}
          disabled={disableEmail}
          require
        />
      </div>
      <div className="form-group">
        <Field
          type="number"
          name="contact"
          label="Contact No:"
          placeholder="Enter Contact Number"
          component={textInput}
          maxLength="10"
          require
        />
      </div>
      {!isUpdate && (
        <>
          <div className="form-group">
            <Field
              type="password"
              name="password"
              label="Password:"
              placeholder="Enter Password"
              component={textInput}
              minLength="8"
              maxLength="32"
              require
            />
          </div>
          <div className="form-group">
            <Field
              type="password"
              name="confirm_password"
              label="Confirm Password:"
              placeholder="Confirm Password"
              component={textInput}
              minLength="8"
              maxLength="32"
              require
            />
          </div>
        </>
      )}

      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <Field
              name="caste"
              label="Caste:"
              placeholder="Select Caste"
              component={selectInput}
              options={CASTE}
              data-live-search="on"
              require
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <Field
              type="text"
              name="religion"
              label="Religion:"
              placeholder="Enter Religion"
              component={textInput}
              require
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <Field
          name="admission_category"
          label="Admission category:"
          placeholder="Select Addmission Category"
          component={selectInput}
          options={ADDMISSION_CATEGORIES}
          data-live-search="on"
          require
        />
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <Field
              name="course"
              label="Course:"
              placeholder="Select Course"
              component={selectInput}
              options={COURSE}
              onChange={onCourseChange}
              data-live-search="on"
              require
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <Field
              name="branch"
              label="Branch:"
              placeholder="Select Branch"
              component={selectInput}
              options={BRANCH}
              data-live-search="on"
              require
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <Field
              name="addmission_year"
              label="Addmission Year:"
              placeholder="Select Addmission year"
              component={selectInput}
              options={YEAR}
              data-live-search="on"
              require
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <Field
              name="semester"
              label="Semester:"
              placeholder="Select Semester"
              component={selectInput}
              options={SEMESTER}
              data-live-search="on"
              require
            />
          </div>
        </div>
      </div>

      {!isUpdate && (
        <div className="row">
          <div className="col-lg-6 text-center">
            <div className="form-group">
              <Field
                name="photo"
                placeholder="Add Photo"
                component={ImageInput}
                default="/static/images/photo.jpg"
                message="Max Size 500KB."
              />
            </div>
          </div>
          <div className="col-lg-6 mt-lg-5 text-center">
            <div className="form-group">
              <Field
                name="sign"
                placeholder="Add Sign"
                component={ImageInput}
                default="/static/images/sign.jpg"
                message="Sign only on white page. Max Size 500KB."
              />
            </div>
          </div>
        </div>
      )}
      <div className="form-group mt-3 text-center">
        <button type="submit" className="btn btn-primary">
          Continue
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'StudentForm',
  destroyOnUnmount: false,
  validate,
  onSubmitFail: scrollToFirstError,
})(StudentDetailsForm);
