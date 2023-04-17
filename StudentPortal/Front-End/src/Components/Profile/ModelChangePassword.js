import React from 'react'
import { textInput } from '../ReduxForm/form'
import { Field, reduxForm } from "redux-form";
import { passwordRegex } from '../ReduxForm/Regex'
import { connect ,useDispatch } from 'react-redux'
import { changePassword } from '../../redux/actions/userAction'
import Loading from '../../Util/Loading'

function ModelChangePassword(props) {
    const dispatch = useDispatch();
    
    const { loading, errors,success } = props.UI

    const onSubmit = async (values) => {
        const formData = new FormData();
        Object.keys(values).forEach((field, index) => {
            formData.append(field, values[field]);
        });
        await props.changePassword(formData,props.domain)

        setTimeout(() => {
            document.getElementById('close-modal-changepass').click() 
            dispatch({ type: "CLEAR_ERRORS" })
            props.reset()
        },2000)
    }

    return (
        <div class="modal fade" id="change_password" tabindex="-1" role="dialog" aria-labelledby="change_password_title">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="change_password_title">Change Password</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>

                    <div class="modal-body">
                        <form id="changePasswordForm" onSubmit={props.handleSubmit(onSubmit)}>

                            <div className="form-group">
                                <Field
                                    type="password"
                                    name="current_password"
                                    label="Current Password:"
                                    placeholder="Enter Current-Password."
                                    component={textInput}
                                    require
                                />
                            </div>

                            <div className="form-group">
                                <Field
                                    type="password"
                                    name="password"
                                    label="Password:"
                                    placeholder="Enter Password"
                                    component={textInput}
                                    minLength="8"
                                    maxLength="32"
                                    require
                                />
                            </div>
                            <div className="form-group">
                                <Field
                                    type="password"
                                    name="confirm_password"
                                    label="Confirm Password:"
                                    placeholder="Confirm Password"
                                    component={textInput}
                                    minLength="8"
                                    maxLength="32"
                                    require
                                />
                            </div>
                            {loading === true ?
                                <Loading /> :
                                errors.error && (
                                    <div class="alert alert-danger"
                                        style={{ textAlign: "center" }}
                                    >
                                        Current Password Does't Match
                                    </div>) 
                            }
                            {
                                success &&
                                <div class="alert alert-success"
                                    style={{ textAlign: "center" }}
                                >
                                    Password Changed SucccesFully
                                </div>
                            }
                            <div className="modal-footer">
                                <button type="submit" name="submit" id="submit" className="btn btn-success">Save Changes</button>
                                <button type="button" id="close-modal-changepass" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


const validate = (values) => {

    const errors = {};
    const regError = `<div id="repassword">
                            <span>Password must contain the following:</span>
                            <p>A <b>lowercase</b> letter.</p>
                            <p>A <b>UPPERCASE</b> letter.</p>
                            <p>A <b>number (0-9)</b>.</p>
                            <p>A <b>special (!@#$%^&*) characters</b>.</p>
                            <p>Password length between <b>8-32 characters</b>.</p>
                          </div>`;
    ["password", "confirm_password", "current_password"].forEach(field => {
        const fieldName = field.replace(/_/g, " ");
        const value = values[field]
        if (!value) {
            errors[field] = `${fieldName} is required`;
        } else {
            switch (field) {
                case "password":
                case "current_password":
                    if (!value.match(passwordRegex)) {
                        errors[field] = regError
                    }
                    break;
                case "confirm_password":
                    if (value !== values.password) {
                        errors[field] = `Password doesn't match.`;
                    }
                    break;
                default:
                    break;
            }
        }
    })


    return errors;
};


const ChangePasswordForm = reduxForm({
    form: "changePasswordForm",
    validate,
})(ModelChangePassword);

const mapStateToProps = (state) => ({
    UI: state.UI
})

export default connect(mapStateToProps, { changePassword })(ChangePasswordForm)
