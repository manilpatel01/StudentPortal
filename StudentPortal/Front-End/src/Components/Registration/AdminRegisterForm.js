import React, { Component } from "react";
import { connect } from "react-redux";

import AdminForm from "./AdminForm";
import { RegisterAdmin } from "../../redux/actions/userAction";

class AdminRegisterForm extends Component {
  handleSubmit = (values) => {
    //converting to multi-part form data
    const formData = new FormData();
    Object.keys(values).forEach((field, index) => {
      if (field === "photo" || field === "sign") {
        formData.append(field, values[field], values[field].name);
      } else {
        formData.append(field, values[field]);
      }
    });
    //passed history 'cause after success full registration it redirect to login page
    this.props.RegisterAdmin(formData, this.props.history);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-7 mx-auto mt-5">
            <div className="card">
              <div className="card-body">
                <AdminForm isUpdate={false} onSubmit={this.handleSubmit} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { RegisterAdmin })(AdminRegisterForm);
