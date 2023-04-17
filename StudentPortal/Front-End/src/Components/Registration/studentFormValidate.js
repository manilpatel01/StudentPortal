import { STUDENT_FIELDS as FIELDS } from "./data";
import {
  enrollmentRegex,
  nameRegex,
  emailRegex,
  contactRegex,
  passwordRegex,
  addLineRegex,
  cityRegex,
  pinRegex,
} from "../ReduxForm/Regex";

const validate = (values) => {
  const errors = {};

  FIELDS.forEach((field) => {
    const fieldName = field.replace(/_/g, " ");
    const value = values[field];

    if (!value) {
      errors[field] = `${fieldName} is required`;
    } else
      switch (field) {
        case "enrollment":
          if (!value.match(enrollmentRegex)) {
            errors[field] = `Please enter valid Enrollment No.`;
          }
          break;
        case "first_name":
        case "middle_name":
        case "last_name":
        case "father_name":
        case "mother_name":
        case "father_occupation":
        case "mother_occupation":
        case "religion":
          if (!value.match(nameRegex)) {
            errors[field] = `Please enter your valid ${fieldName}.`;
          }
          break;
        case "email":
          if (!value.match(emailRegex)) {
            errors[field] = `Please enter your valid ${fieldName}.`;
          }
          break;
        case "contact":
          if (!value.match(contactRegex)) {
            errors[field] = `Please enter your valid Mobile Number.`;
          }
          break;
        case "password":
          if (!value.match(passwordRegex)) {
            errors[field] = `<div id="repassword">
                            <span>Password must contain the following:</span>
                            <p>A <b>lowercase</b> letter.</p>
                            <p>A <b>UPPERCASE</b> letter.</p>
                            <p>A <b>number (0-9)</b>.</p>
                            <p>A <b>special (!@#$%^&*) characters</b>.</p>
                            <p>Password length between <b>8-32 characters</b>.</p>
                          </div>`;
          }
          break;
        case "confirm_password":
          if (value !== values.password) {
            errors[field] = `Password doesn't match.`;
          }
          break;
        case "aadhar":
          if (!value.match(/^[0-9]{12}$/)) {
            errors[field] = `Please enter your valid ${fieldName}.`;
          }
          break;
        case "re_add_l1":
        case "re_add_l2":
        case "pr_add_l1":
        case "pr_add_l2":
        case "off_add_l1":
        case "off_add_l2":
          if (!value.match(addLineRegex)) {
            errors[field] = `Enter valid address line.`;
          }
          break;
        case "re_add_city":
        case "re_add_state":
        case "pr_add_city":
        case "pr_add_state":
        case "off_add_city":
        case "off_add_state":
          if (!value.match(cityRegex)) {
            errors[field] = `Enter valid name.`;
          }
          break;
        case "re_add_pin_code":
        case "pr_add_pin_code":
        case "off_add_pin_code":
          if (!value.match(pinRegex)) {
            errors[field] = `Check your Pin-Code.`;
          }
          break;
        case "hsc_pr":
        case "ssc_pr":
          if (!value.match(/^[0-9]{1,2}\.[0-9]{1,2}$/)) {
            errors[field] = `Please enter your valid ${fieldName}.`;
          }
          break;
        case "family_income":
          if (!value.match(/^[0-9]+$/)) {
            errors[field] = `Please enter your valid ${fieldName}.`;
          }
          break;
        default:
          break;
      }
  });
  return errors;
};

export default validate;
