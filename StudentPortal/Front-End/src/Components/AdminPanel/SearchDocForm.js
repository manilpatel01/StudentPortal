import React from 'react';
import { change, Field, reduxForm, untouch } from 'redux-form';
import { textInput } from '../ReduxForm/form';
import { enrollmentRegex } from '../ReduxForm/Regex';

const SearchDocForm = ({ handleSubmit, submitting, dispatch }) => {
  const resetDate = (name) => {
    dispatch(change('searchDocForm', name, undefined));
    dispatch(untouch('searchDocForm', name));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-4">
          <div className="form-group">
            <Field
              type="date"
              name="start"
              label="Start Date:"
              component={textInput}
            />
            <label
              className="float-right text-primary mr-2 mt-1"
              style={{ cursor: 'pointer' }}
              onClick={() => resetDate('start')}
            >
              Clear
            </label>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="form-group">
            <Field
              type="date"
              name="end"
              label="End Date:"
              component={textInput}
            />
            <label
              className="float-right text-primary mr-2 mt-1"
              style={{ cursor: 'pointer' }}
              onClick={() => resetDate('end')}
            >
              Clear
            </label>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="form-group">
            <Field
              type="text"
              name="enrollment"
              label="Enrollment:"
              placeholder="Enrollment"
              component={textInput}
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
  console.log(values);
  const errors = {};
  if (values.start == null && values.end == null && values.enrollment == null) {
    return {
      start: 'Date or Enrollment is required',
      end: 'Date or Enrollment is required',
      enrollment: 'Enrollment or Date is required',
    };
  }
  if (values.start == null && values.end != null) {
    errors['start'] = 'Start Date is required';
  }
  if (values.start != null && values.end == null) {
    errors['end'] = 'End Date is required';
  }
  if (values.start > values.end) {
    errors['start'] = 'Start Date is smaller then End Date';
    errors['end'] = 'End Date is larger then Start Date';
  }
  if (values.enrollment != null && !values.enrollment.match(enrollmentRegex)) {
    errors['enrollment'] = 'Please enter valid Enrollment No.';
  }
  return errors;
};

export default reduxForm({ form: 'searchDocForm', validate })(SearchDocForm);
