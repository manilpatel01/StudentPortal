import React, { useEffect } from 'react';
import { BLOOD_GROOP, YEAR, COUNTRY, THELASEMIA } from './data';
import { Field, reduxForm, formValueSelector, change } from 'redux-form';
import { textInput, selectInput, scrollToFirstError } from '../ReduxForm/form';
import validate from './studentFormValidate';
import { connect } from 'react-redux';

let PresonalDetailsForm = (props) => {
  const {
    handleSubmit,
    prevStep,
    dispatch,
    re_add_l1,
    re_add_l2,
    re_add_city,
    re_add_state,
    re_add_pin_code,
    re_add_country,
  } = props;
  useEffect(() => {}, [props]);

  const handleCopyAdd = (e) => {
    if (e.target.checked) {
      dispatch(change('StudentForm', 'pr_add_l1', re_add_l1));
      dispatch(change('StudentForm', 'pr_add_l2', re_add_l2));
      dispatch(change('StudentForm', 'pr_add_city', re_add_city));
      dispatch(change('StudentForm', 'pr_add_state', re_add_state));
      dispatch(change('StudentForm', 'pr_add_pin_code', re_add_pin_code));
      if (re_add_country)
        dispatch(change('StudentForm', 'pr_add_country', re_add_country));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4 text-center text-primary">Personal Details</h2>
      <div className="form-group">
        <Field
          type="text"
          name="father_name"
          label="Father Name:"
          placeholder="Enter Father Name"
          component={textInput}
          require
        />
      </div>
      <div className="form-group">
        <Field
          type="text"
          name="mother_name"
          label="Mother Name:"
          placeholder="Enter Mother Name"
          component={textInput}
          require
        />
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <Field
              type="number"
              name="aadhar"
              label="Aadhar Card No:"
              placeholder="Enter Aadhar Card No"
              component={textInput}
              minLength="12"
              maxLength="12"
              require
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <Field
              type="text"
              name="voter_id"
              label="Voter Id No:"
              placeholder="Enter Voter Id No"
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
              type="date"
              name="date_of_birth"
              label="Date of Birth:"
              component={textInput}
              min="1995-01-01"
              max="2005-12-31"
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

      <div className="form-group">
        <Field
          name="thelasemia"
          label="Thelasemia Report:"
          placeholder="Select Thelasemia Test Result"
          component={selectInput}
          options={THELASEMIA}
          data-live-search="on"
          require
        />
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <label htmlFor="resident_address">
              Resident Address: <font color="red">*</font>
            </label>

            <div className="mb-1">
              <label className="form-check-label btn">
                <Field
                  type="checkbox"
                  className=""
                  name="is_in_ld_hostel"
                  component={textInput}
                />{' '}
                Are You leave in LD Hostel?
              </label>
            </div>

            <Field
              type="text"
              name="re_add_l1"
              component={textInput}
              className="form-control"
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
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <label htmlFor="permanent-address">
              Permanent Address: <font color="red">*</font>
            </label>

            <div className="mb-1">
              <label className="form-check-label btn">
                <input type="checkbox" onClick={handleCopyAdd} /> Same as
                Resident Address
              </label>
            </div>
            <Field
              type="text"
              name="pr_add_l1"
              component={textInput}
              className="form-control"
              placeholder="Address Line 1"
            />
            <Field
              type="text"
              name="pr_add_l2"
              component={textInput}
              className="form-control mt-1"
              placeholder="Address Line 2"
            />
            <Field
              type="text"
              name="pr_add_city"
              component={textInput}
              className="form-control mt-1"
              placeholder="City"
            />
            <Field
              type="text"
              name="pr_add_state"
              component={textInput}
              className="form-control mt-1"
              placeholder="State"
            />
            <Field
              type="number"
              name="pr_add_pin_code"
              component={textInput}
              className="form-control mt-1"
              placeholder="Postal Code"
            />

            <Field
              name="pr_add_country"
              placeholder="Select Country"
              className="form-control mt-1"
              component={selectInput}
              options={COUNTRY}
              data-live-search="on"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <Field
              name="ssc_year"
              label="SSC Year:"
              placeholder="Select SSC year"
              component={selectInput}
              options={YEAR}
              data-live-search="on"
              require
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <Field
              type="number"
              name="ssc_pr"
              label="SSC PR:"
              placeholder="99.00"
              component={textInput}
              require
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <Field
              name="hsc_year"
              label="HSC Year:"
              placeholder="Select HSC year"
              component={selectInput}
              options={YEAR}
              data-live-search="on"
              require
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <Field
              type="number"
              name="hsc_pr"
              label="HSC PR:"
              placeholder="99.00"
              component={textInput}
              require
            />
          </div>
        </div>
      </div>
      <div className="form-group mt-3 text-center">
        <button
          type="button"
          onClick={prevStep}
          className="btn btn-secondary mr-3"
        >
          Back
        </button>
        <button type="submit" className="btn btn-primary">
          Continue
        </button>
      </div>
    </form>
  );
};

PresonalDetailsForm = reduxForm({
  form: 'StudentForm',
  destroyOnUnmount: false,
  validate,
  onSubmitFail: scrollToFirstError,
})(PresonalDetailsForm);

const selector = formValueSelector('StudentForm');
PresonalDetailsForm = connect((state) => ({
  re_add_l1: selector(state, 're_add_l1'),
  re_add_l2: selector(state, 're_add_l2'),
  re_add_city: selector(state, 're_add_city'),
  re_add_state: selector(state, 're_add_state'),
  re_add_pin_code: selector(state, 're_add_pin_code'),
  re_add_country: selector(state, 're_add_country'),
}))(PresonalDetailsForm);

export default PresonalDetailsForm;
