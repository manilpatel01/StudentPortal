import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { getGlobalAdmin } from '../../../redux/actions/dataAction';
import { destroy } from 'redux-form';
import { SET_INITIALVALUE } from '../../../redux/type';
import ModelEditAdminProfile from '../../Registration/ModelEditAdminProfile';
import { emailRegex } from '../../ReduxForm/Regex';
import Loading from '../../../Util/Loading';

function UpdateAdminInfo(props) {
  const [errors, setErrors] = useState(props.errors);
  const [loading, setLoading] = useState(props.loading);
  const [admin, setAdmin] = useState(props.admin);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch({ type: SET_INITIALVALUE });
    };
  }, []);

  useEffect(() => {
    setErrors(props.errors);
    setLoading(props.loading);
  }, [props.errors, props.loading]);

  useEffect(() => {
    setAdmin(props.admin);
  }, [props.admin]);

  const fetchAdminSetInForm = async (e) => {
    e.preventDefault();

    if (!email.match(emailRegex)) {
      setEmailError('Please enter valid email address.');
      return;
    } else {
      setEmailError();
    }
    dispatch({ type: SET_INITIALVALUE });
    dispatch(destroy('AdminForm'));
    props.getGlobalAdmin(email);
  };

  return (
    <div>
      <form onSubmit={fetchAdminSetInForm} className="mb-3">
        <div className="from-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Admin Email Address"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label
            className="error"
            dangerouslySetInnerHTML={{ __html: emailError }}
          ></label>
        </div>

        <button type="submit" className="btn btn-success" disabled={loading}>
          Search
        </button>
      </form>

      {loading ? (
        <Loading />
      ) : admin ? (
        <>
          <ModelEditAdminProfile user={admin} />
          <h2>Admin Found</h2>
          <div>
            <strong>Email: </strong>
            {admin.email}
          </div>
          <div>
            <strong>Name: </strong>
            {`${admin.first_name} ${admin.middle_name} ${admin.last_name}`}
          </div>

          <button
            className="btn btn-success btn-lg mt-3"
            data-toggle="modal"
            data-target="#edit_admin_profile"
          >
            <i className="fa fa-edit"></i> Edit Admin Profile
          </button>
        </>
      ) : (
        errors && (
          <div className="alert alert-danger" style={{ textAlign: 'center' }}>
            {errors.message}
          </div>
        )
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  errors: state.Data.adminErrors,
  admin: state.Data.admin,
  loading: state.Data.adminLoading,
});

const mapActionToProps = {
  getGlobalAdmin,
};

export default connect(mapStateToProps, mapActionToProps)(UpdateAdminInfo);
