import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { textInput } from '../ReduxForm/form';

const EditFieldsForm = () => {
  return (
    <form>
      <div className="row">
        <div className="col-lg-3 col-md-4">
          <label className="form-check-label btn">
            <Field
              type="checkbox"
              className=""
              name="enrollment"
              component={textInput}
            />{' '}
            Enrollment
          </label>
        </div>
        <div className="col-lg-3 col-md-4">
          <label className="form-check-label btn">
            <Field
              type="checkbox"
              className=""
              name="name"
              component={textInput}
            />{' '}
            Name
          </label>
        </div>
        <div className="col-lg-3 col-md-4">
          <label className="form-check-label btn">
            <Field
              type="checkbox"
              className=""
              name="email"
              component={textInput}
            />{' '}
            Email
          </label>
        </div>

        <div className="col-lg-3 col-md-4">
          <label className="form-check-label btn">
            <Field
              type="checkbox"
              className=""
              name="contact"
              component={textInput}
            />{' '}
            Mobile No
          </label>
        </div>
        <div className="col-lg-3 col-md-4">
          <label className="form-check-label btn">
            <Field
              type="checkbox"
              className=""
              name="branch"
              component={textInput}
            />{' '}
            Branch
          </label>
        </div>
        <div className="col-lg-3 col-md-4">
          <label className="form-check-label btn">
            <Field
              type="checkbox"
              className=""
              name="semester"
              component={textInput}
            />{' '}
            Semester
          </label>
        </div>
        <div className="col-lg-3 col-md-4">
          <label className="form-check-label btn">
            <Field
              type="checkbox"
              className=""
              name="addmission_year"
              component={textInput}
            />{' '}
            Addmission Year
          </label>
        </div>
        <div className="col-lg-3 col-md-4">
          <label className="form-check-label btn">
            <Field
              type="checkbox"
              className=""
              name="course"
              component={textInput}
            />{' '}
            Course
          </label>
        </div>
        <div className="col-lg-3 col-md-4">
          <label className="form-check-label btn">
            <Field
              type="checkbox"
              className=""
              name="caste"
              component={textInput}
            />{' '}
            Caste
          </label>
        </div>
        <div className="col-lg-3 col-md-4">
          <label className="form-check-label btn">
            <Field
              type="checkbox"
              className=""
              name="gender"
              component={textInput}
            />{' '}
            Gender
          </label>
        </div>
        <div className="col-lg-3 col-md-4">
          <label className="form-check-label btn">
            <Field
              type="checkbox"
              className=""
              name="profile"
              component={textInput}
            />{' '}
            View Profile
          </label>
        </div>
        <div className="col-lg-3 col-md-4">
          <label className="form-check-label btn">
            <Field
              type="checkbox"
              className=""
              name="detain"
              component={textInput}
            />{' '}
            Detain Student
          </label>
        </div>
        {/* <div className="col-lg-3 col-md-4 ml-auto">
          <button className="btn btn-primary btn-sm" type="submit">
            Apply <i class="fas fa-check fa-sm"></i>
          </button>
        </div> */}
      </div>
    </form>
  );
};

export default reduxForm({ form: 'editFieldsForm' })(EditFieldsForm);
