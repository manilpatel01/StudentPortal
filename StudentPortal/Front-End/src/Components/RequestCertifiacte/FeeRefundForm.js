import React from "react";
import { Field, reduxForm } from "redux-form";
import { ImageInput, selectInput, textInput } from "../ReduxForm/form";
import { FEETYPE } from "../Registration/data";

const FeeRefundForm = (props) => {
  const { onSubmit, submitting } = props;
  console.log(onSubmit);
  return (
    <form onSubmit={props.handleSubmit(onSubmit)}>
      <div class="row">
        <div class="col-sm-6 text-center mx-auto">
          <div class="form-group">
            <Field
              name="request_document"
              placeholder="Upload Fee Receipt"
              className="uploadDocument"
              component={ImageInput}
              default="/static/images/document.png"
              message="Max Size 500KB."
            />
          </div>
        </div>
      </div>

      <div class="form-group">
        <Field
          name="fees_type"
          label="Fee Type:"
          placeholder="Select Type"
          component={selectInput}
          options={FEETYPE}
          data-live-search="on"
          require
        />
      </div>

      <div class="form-group">
        <Field
          type="text"
          name="bank_name"
          label="Bank Name:"
          placeholder="enter a bank name "
          component={textInput}
          require
        />
      </div>

      <div class="form-group">
        <Field
          type="text"
          name="bank_ifsc"
          label="Bank IFSC:"
          placeholder="enter a IFSC code"
          component={textInput}
          require
        />
      </div>

      <div class="form-group">
        <Field
          type="text"
          name="bank_branch"
          label="Fee Type:"
          placeholder="Enter Bank Branch Name"
          component={textInput}
          require
        />
      </div>

      <div class="form-group">
        <Field
          type="text"
          name="bank_ac_no"
          label="Bank Account Number:"
          placeholder="Enter Bank Account Number"
          component={textInput}
          require
        />
      </div>

      <div class="form-group">
        <Field
          type="text"
          name="transaction_no"
          label="Transection Id"
          placeholder="Enter Transection Id"
          component={textInput}
          require
        />
      </div>

      <div class="form-group">
        <Field
          type="number"
          name="amount"
          label="Amount:"
          placeholder="99.00"
          component={textInput}
          require
        />
      </div>

      <button
        class="btn btn-success btn-lg"
        type="submit"
        disabled={submitting}
      >
        Apply for FEE REFUND
      </button>
    </form>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.request_document) {
    errors.feeReceipt = `Fee Receipt is required.`;
  }
  if (!values.fees_type) {
    errors.feeReceipt = `Fee Type  is required.`;
  }
  if (!values.transaction_no) {
    errors.feeReceipt = `Transection number is required.`;
  }
  if (!values.bank_name) {
    errors.feeReceipt = `bank name is required.`;
  }
  if (!values.bank_ifsc) {
    errors.feeReceipt = `bank ifsc is required.`;
  }
  if (!values.bank_branch) {
    errors.feeReceipt = `bank branch is required.`;
  }
  if (!values.bank_ac_no) {
    errors.feeReceipt = `bank account number is required.`;
  }

  if (!values.amount) {
    errors.feeReceipt = `amount is required.`;
  }

  return errors;
};

export default reduxForm({
  form: "FeeRefundform",
  validate,
})(FeeRefundForm);
