import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { textInput, selectInput, scrollToFirstError } from '../ReduxForm/form';
import {
  GENDER,
  ADMIN_ROLE,
  BRANCH_YEAR,
  COUNTRY,
  BLOOD_GROOP,
  BRANCH_BE,
  BRANCH_PDDC,
  BRANCH_PG,
  COURSE,
  BRANCH_MCA,
} from './data';
import { CLEAR_ERRORS } from '../../redux/type';
import validate from './AdminFormValidate';

const EditAdminForm = (props) => {
  const dispatch = useDispatch();
  const { handleSubmit } = props;

  const [BRANCH, setBRANCH] = useState({ 'Please Select Course First': '' });
  useEffect(() => {
    onCourseChange({ target: { value: props.initialValues.course } });
    return () => {
      dispatch({
        type: CLEAR_ERRORS,
      });
    };
  }, []);

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
      <div className="form-group">
        <Field
          type="text"
          name="faculty_id"
          label="Faculty Id:"
          placeholder="Enter your faculty Id"
          component={textInput}
          disabled
          require
        />
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="form-group">
            <Field
              type="text"
              name="first_name"
              label="First Name:"
              placeholder="Enter First Name"
              component={textInput}
              require
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <Field
              type="text"
              name="middle_name"
              label="Middle Name:"
              placeholder="Enter Middle Name"
              component={textInput}
              require
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <Field
              type="text"
              name="last_name"
              label="Last Name:"
              placeholder="Enter Last Name"
              component={textInput}
              require
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <Field
              name="gender"
              label="Gender:"
              placeholder="Select Gender"
              component={selectInput}
              options={GENDER}
              data-live-search="on"
              require
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <Field
              name="role"
              label="Role:"
              placeholder="Select Role"
              component={selectInput}
              options={ADMIN_ROLE}
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
              type="text"
              name="designation"
              label="Designation:"
              placeholder="Enter Designation"
              component={textInput}
              require
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <Field
              name="branch_year"
              label="Branch Year:"
              placeholder="Select Branch year"
              component={selectInput}
              options={BRANCH_YEAR}
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

      <div className="form-group">
        <Field
          type="email"
          name="email"
          label="Email Id:"
          placeholder="Enter Email Id"
          component={textInput}
          disabled
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

      <div className="form-group">
        <label htmlFor="resident_address">
          Resident Address: <font color="red">*</font>
        </label>

        <Field
          type="text"
          name="re_add_l1"
          component={textInput}
          className="form-control mt-3"
          placeholder="Address Line 1"
        />
        <Field
          type="text"
          name="re_add_l2"
          component={textInput}
          className="form-control mt-1"
          placeholder="Address Line 2"
        />
        <Field
          type="text"
          name="re_add_city"
          component={textInput}
          className="form-control mt-1"
          placeholder="City"
        />
        <Field
          type="text"
          name="re_add_state"
          component={textInput}
          className="form-control mt-1"
          placeholder="State"
        />
        <Field
          type="number"
          name="re_add_pin_code"
          component={textInput}
          className="form-control mt-1"
          placeholder="Postal Code"
        />

        <Field
          name="re_add_country"
          placeholder="Select Country"
          className="form-control mt-1"
          component={selectInput}
          options={COUNTRY}
          data-live-search="on"
        />
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <Field
              type="date"
              name="date_of_birth"
              label="Date of Birth:"
              component={textInput}
              min="1900-01-01"
              max="2000-12-31"
              require
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <Field
              name="blood_group"
              label="Blood Group:"
              placeholder="Select Blood Group"
              component={selectInput}
              options={BLOOD_GROOP}
              data-live-search="on"
              require
            />
          </div>
        </div>
      </div>
      <div className="form-group mt-3 text-center">
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});

const AdminRegistrationForm = reduxForm({
  form: 'AdminForm',
  validate: validate,
  onSubmitFail: scrollToFirstError,
})(EditAdminForm);

export default connect(mapStateToProps)(AdminRegistrationForm);
