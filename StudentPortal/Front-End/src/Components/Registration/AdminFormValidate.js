import { ADMIN_FIELDS } from "./data";
import {
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

  ADMIN_FIELDS.forEach((field) => {
    const fieldName = field.replace(/_/g, " ");
    const value = values[field];

    if (!value) {
      errors[field] = `${fieldName} is required`;
    } else
      switch (field) {
        case "first_name":
        case "middle_name":
        case "last_name":
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
        case "re_add_l1":
        case "re_add_l2":
          if (!value.match(addLineRegex)) {
            errors[field] = `Enter valid address line.`;
          }
          break;
        case "re_add_city":
        case "re_add_state":
          if (!value.match(cityRegex)) {
            errors[field] = `Enter valid name.`;
          }
          break;
        case "re_add_pin_code":
          if (!value.match(pinRegex)) {
            errors[field] = `Check your Pin-Code.`;
          }
          break;
        default:
          break;
      }
  });
  return errors;
};

export default validate;
