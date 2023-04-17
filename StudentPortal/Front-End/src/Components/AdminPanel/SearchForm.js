import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { change, Field, reduxForm } from 'redux-form';
import { selectInput, textInput } from '../ReduxForm/form';
import { enrollmentRegex } from '../ReduxForm/Regex';
import {
  SEMESTER,
  YEAR,
  COURSE,
  CASTE,
  GENDER,
  BRANCH_BE,
  BRANCH_PDDC,
  BRANCH_PG,
  ADDMISSION_CATEGORIES,
} from '../Registration/data';

const SearchForm = ({ handleSubmit, submitting, dispatch }) => {
  const [BRANCH, setBRANCH] = useState({ 'Please Select Course First': '' });
  const [colClass, setColClass] = useState('col-lg-3');
  const admin = useSelector((state) => state.User.credentials);

  useEffect(() => {
    if (admin.role === 'ROLE_DEPARTMENT') {
      dispatch(change('searchForm', 'course', admin.course));
      dispatch(change('searchForm', 'branch', admin.branch));
      setColClass('col-lg-4');
    }
  }, [admin.role]);

  const onCourseChange = (e) => {
    switch (e.target.value) {
      case 'BE':
        setBRANCH({ 'All Branch': 0, ...BRANCH_BE });
        break;
      case 'PDDC':
        setBRANCH({ 'All Branch': 0, ...BRANCH_PDDC });
        break;
      case 'PG':
        setBRANCH({ 'All Branch': 0, ...BRANCH_PG });
        break;
      default:
        setBRANCH({ 'Please Select Course First': '' });
        break;
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className={colClass}>
          <div className="form-group">
            <Field
              type="number"
              name="enrollment"
              label="Enrollment No:"
              placeholder="Enter Enrollment No"
              minLength="12"
              maxLength="12"
              component={textInput}
            />
          </div>
        </div>

        <div className={colClass}>
          <div className="form-group">
            <Field
              name="semester"
              label="Semester:"
              placeholder="Select Semester"
              component={selectInput}
              options={{ 'All SEM': 0, ...SEMESTER }}
              data-live-search="on"
            />
          </div>
        </div>
        <div className={colClass}>
          <div className="form-group">
            <Field
              name="addmission_year"
              label="Addmission Year:"
              placeholder="Select Addmission year"
              component={selectInput}
              options={{ 'All Year': 0, ...YEAR }}
              data-live-search="on"
            />
          </div>
        </div>
        <div className={colClass}>
          <div className="form-group">
            <Field
              name="admission_category"
              label="Admission Category:"
              placeholder="Select admission category"
              component={selectInput}
              options={{
                'All admission category': 'ALL',
                ...ADDMISSION_CATEGORIES,
              }}
              data-live-search="on"
            />
          </div>
        </div>

        {admin.role !== 'ROLE_DEPARTMENT' && (
          <>
            <div className={colClass}>
              <div className="form-group">
                <Field
                  name="course"
                  label="Course:"
                  placeholder="Select Course"
                  component={selectInput}
                  options={{ 'All Course': 'ALL', ...COURSE }}
                  onChange={onCourseChange}
                  data-live-search="on"
                />
              </div>
            </div>

            <div className={colClass}>
              <div className="form-group">
                <Field
                  name="branch"
                  label="Branch:"
                  placeholder="Select Branch"
                  component={selectInput}
                  options={BRANCH}
                  data-live-search="on"
                />
              </div>
            </div>
          </>
        )}
        <div className={colClass}>
          <div className="form-group">
            <Field
              name="caste"
              label="Caste:"
              placeholder="Select Caste"
              component={selectInput}
              options={{ 'All Caste': 'ALL', ...CASTE }}
              data-live-search="on"
            />
          </div>
        </div>
        <div className={colClass}>
          <div className="form-group">
            <Field
              name="gender"
              label="Gender:"
              placeholder="Select Gender"
              component={selectInput}
              options={{ 'All Gender': 'ALL', ...GENDER }}
              data-live-search="on"
            />
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-lg-4 form-group mx-auto">
          <button
            id="bth-search"
            className="btn btn-primary btn-lg btn-block"
            disabled={submitting}
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

const validate = (values) => {
  const errors = {};
  if (values['enrollment'] && !values['enrollment'].match(enrollmentRegex)) {
    errors['enrollment'] = `Please enter valid Enrollment No.`;
  }
  return errors;
};

export default reduxForm({ form: 'searchForm', validate })(SearchForm);
