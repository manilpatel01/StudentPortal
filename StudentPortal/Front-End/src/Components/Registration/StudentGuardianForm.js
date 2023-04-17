import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Loading from '../../Util/Loading';
import { CLEAR_ERRORS } from '../../redux/type';
import { textInput, selectInput, scrollToFirstError } from '../ReduxForm/form';
import { COUNTRY } from './data';
import { reduxForm, Field } from 'redux-form';
import validate from './studentFormValidate';

const StudentGuardianForm = (props) => {
  const dispatch = useDispatch();
  const { handleSubmit, pristine, prevStep, submitting } = props;
  const { loading, errors, success, successMessage } = useSelector(
    (state) => state.UI
  );

  useEffect(() => {
    return () => {
      dispatch({
        type: CLEAR_ERRORS,
      });
    };
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4 text-center text-primary">Family Details</h2>
      <div className="form-group">
        <Field
          type="text"
          name="father_occupation"
          label="Father Occupation:"
          placeholder="Enter Father occupation"
          component={textInput}
          require
        />
      </div>

      <div className="form-group">
        <label htmlFor="office_address">
          Office Address: <font color="red">*</font>
        </label>
        <Field
          type="text"
          name="off_add_l1"
          component={textInput}
          className="form-control mt-3"
          placeholder="Address Line 1"
        />
        <Field
          type="text"
          name="off_add_l2"
          component={textInput}
          className="form-control mt-1"
          placeholder="Address Line 2"
        />
        <Field
          type="text"
          name="off_add_city"
          component={textInput}
          className="form-control mt-1"
          placeholder="City"
        />
        <Field
          type="text"
          name="off_add_state"
          component={textInput}
          className="form-control mt-1"
          placeholder="State"
        />
        <Field
          type="number"
          name="off_add_pin_code"
          component={textInput}
          className="form-control mt-1"
          placeholder="Postal Code"
        />

        <Field
          name="off_add_country"
          placeholder="Select Country"
          className="form-control mt-1"
          component={selectInput}
          options={COUNTRY}
          value="IN"
          data-live-search="on"
        />
      </div>

      <div className="form-group">
        <Field
          type="text"
          name="mother_occupation"
          label="Mother Occupation:"
          placeholder="Enter Mother occupation"
          component={textInput}
          require
        />
      </div>

      <div className="form-group">
        <Field
          type="number"
          name="family_income"
          label="Family Income:"
          placeholder="Enter Family Income"
          component={textInput}
          require
        />
      </div>

      <div className="form-group mt-3 text-center">
        <button
          type="button"
          onClick={prevStep}
          className="btn btn-secondary mr-3"
        >
          Back
        </button>
        <button
          type="submit"
          className="btn btn-success"
          disabled={pristine || submitting}
        >
          Submit
        </button>
      </div>
      {loading === true ? (
        <Loading />
      ) : (
        errors.error && (
          <div class="alert alert-danger" style={{ textAlign: 'center' }}>
            {errors.error && errors.error}
          </div>
        )
      )}
      {success && (
        <div class="alert alert-success" style={{ textAlign: 'center' }}>
          {successMessage.message && successMessage.message}
        </div>
      )}
    </form>
  );
};

export default reduxForm({
  form: 'StudentForm',
  destroyOnUnmount: false,
  validate,
  onSubmitFail: scrollToFirstError,
})(StudentGuardianForm);
