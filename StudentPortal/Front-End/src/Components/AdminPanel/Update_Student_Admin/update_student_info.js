import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import ModelEditProfile from '../../Profile/ModelEditProfile';

import { getGlobalStudent } from '../../../redux/actions/dataAction';
import { destroy } from 'redux-form';
import { SET_INITIALVALUE } from '../../../redux/type';
import Loading from '../../../Util/Loading';
import { enrollmentRegex } from '../../ReduxForm/Regex';

function UpdateStudentInfo(props) {
  const [errors, setErrors] = useState(props.errors);
  const [loading, setLoading] = useState(props.loading);
  const [student, setStudent] = useState(props.student);
  const [enrollment, setEnrollment] = useState('');
  const [enError, setEnError] = useState();
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
    setStudent(props.student);
  }, [props.student]);

  const fetchStudentSetInForm = async (e) => {
    e.preventDefault();

    if (!enrollment.match(enrollmentRegex)) {
      setEnError('Please enter valid enrollment number.');
      return;
    } else {
      setEnError();
    }
    dispatch({ type: SET_INITIALVALUE });
    dispatch(destroy('StudentForm'));
    props.getGlobalStudent(enrollment);
  };

  console.log(errors);

  return (
    <div>
      <form onSubmit={fetchStudentSetInForm} className="mb-3">
        <div className="from-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Student Enrollment No."
            onChange={(e) => setEnrollment(e.target.value)}
          ></input>
          <label
            className="error"
            dangerouslySetInnerHTML={{ __html: enError }}
          ></label>
        </div>

        <button type="submit" className="btn btn-success" disabled={loading}>
          Search
        </button>
      </form>

      {loading ? (
        <Loading />
      ) : student ? (
        <>
          <ModelEditProfile user={student} disableEmail />
          <h2>Student Found</h2>
          <div>
            <strong>Enrollment: </strong>
            {student.enrollment}
          </div>
          <div>
            <strong>Name: </strong>
            {`${student.first_name} ${student.middle_name} ${student.last_name}`}
          </div>
          <button
            className="btn btn-success btn-lg mt-3"
            data-toggle="modal"
            data-target="#edit_profile"
          >
            <i className="fa fa-edit"></i> Edit Student Profile
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
  errors: state.Data.studentErrors,
  student: state.Data.student,
  loading: state.Data.studentLoading,
});

const mapActionToProps = {
  getGlobalStudent,
};

export default connect(mapStateToProps, mapActionToProps)(UpdateStudentInfo);
