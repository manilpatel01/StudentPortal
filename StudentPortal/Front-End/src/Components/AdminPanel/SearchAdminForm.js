import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { selectInput } from '../ReduxForm/form';
import {
  COURSE,
  BRANCH_BE,
  BRANCH_PDDC,
  BRANCH_PG,
} from '../Registration/data';

const SearchAdminForm = ({ handleSubmit, submitting }) => {
  const [BRANCH, setBRANCH] = useState({ 'Please Select Course First': '' });
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
      <div className="row justify-content-center">
        <div className="col-lg-4">
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

        <div className="col-lg-4">
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

export default reduxForm({ form: 'searchAdminForm' })(SearchAdminForm);
