import React, { useEffect, useState } from 'react';
import StudentForm from '../Registration/StudentForm';
import { updateStudent } from '../../redux/actions/userAction';
import { connect, useDispatch } from 'react-redux';
import { destroy } from 'redux-form';
import Loading from '../../Util/Loading';

function ModelEditProfile(props) {
  const dispatch = useDispatch();
  const [user, setUser] = useState(props.user);
  const { loading, errors, success } = props.UI;
  useEffect(() => {
    return () => {
      dispatch(destroy('StudentForm'));
    };
  }, []);

  useEffect(() => {
    setUser(props.user);
  }, [loading, errors, success, props.user]);

  const handleSubmit = async (values) => {
    const formData = new FormData();
    Object.keys(values).forEach((field, index) => {
      formData.append(field, values[field]);
    });

    await props.updateStudent(formData);
    setTimeout(() => {
      dispatch({ type: 'CLEAR_ERRORS' });
      document.getElementById('profile-model-close').click();
    }, 3000);
  };
  return (
    <div
      class="modal fade"
      id="edit_profile"
      tabindex="-1"
      role="dialog"
      aria-labelledby="edit_profile_title"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="edit_profile_title">
              Edit Profile
            </h4>
            <button
              type="button"
              id="profile-model-close"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <StudentForm
              isUpdate={true}
              onSubmit={handleSubmit}
              user={user}
              disableEmail={props.disableEmail}
            />
            {loading === true ? (
              <Loading />
            ) : (
              errors.error && (
                <div class="alert alert-danger" style={{ textAlign: 'center' }}>
                  There's Might Be Some Server Error
                </div>
              )
            )}
            {success && (
              <div class="alert alert-success" style={{ textAlign: 'center' }}>
                Profile Changed SucccesFully
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  UI: state.UI,
});
export default connect(mapStateToProps, { updateStudent })(ModelEditProfile);
