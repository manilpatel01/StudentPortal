import Axios from 'axios';
import React, { useState } from 'react';
import { APIENDPOINTS } from '../../redux/api_endpoint';
import { enrollmentRegex } from '../ReduxForm/Regex';

const initialState = {
  enrollment: '',
  first_name: '',
  middle_name: '',
  last_name: '',
  gender: '',
};

const GetStudentForm = ({ onSubmit }) => {
  const [enrollment, setEnrollment] = useState();
  const [student, setStudent] = useState(initialState);
  const [enError, setEnError] = useState();
  const [error, setError] = useState();
  const [dataClassName, setDataClassName] = useState('collapse');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!enrollment.match(enrollmentRegex)) {
      setEnError('Please enter valid Enrollment No.');
    } else {
      try {
        setEnError();
        setError();
        const res = await Axios.get(
          APIENDPOINTS.getStudentByEnrollment(enrollment)
        );
        const stud = res.data;
        //stud.gender = stud.gender === 'M' ? 'male' : 'female';
        setStudent(res.data);
        setDataClassName('collapse show');
      } catch (err) {
        setError(err.response.data);
        setStudent(initialState);
        setDataClassName('collapse');
      }
    }
  };

  const handleNext = () => {
    if (!student.first_name) {
      setError('First find Student with enrollment!');
    } else {
      onSubmit(student);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4 text-center text-primary">Student Details</h2>

      <div className="form-group">
        <label htmlFor="enrollment">Enrollment No:</label>
        <input
          type="number"
          name="enrollment"
          placeholder="Enter Enrollment No"
          className="form-control"
          value={enrollment}
          onChange={(e) => {
            setEnrollment(e.target.value);
          }}
          minLength="12"
          maxLength="12"
          required
        />
        <label
          className="error"
          dangerouslySetInnerHTML={{ __html: enError }}
        ></label>
      </div>

      <div className="form-group mt-3 text-center">
        <button type="submit" className="btn btn-success">
          Find Student
        </button>
      </div>

      <label
        className="error"
        dangerouslySetInnerHTML={{ __html: error }}
      ></label>

      <div className={dataClassName}>
        <div className="form-group">
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            value={student.first_name}
            className="form-control"
            disabled
          />
        </div>

        <div className="form-group">
          <label htmlFor="middle_name">Middle Name:</label>
          <input
            type="text"
            name="middle_name"
            id="middle_name"
            value={student.middle_name}
            className="form-control"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            value={student.last_name}
            className="form-control"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender Name:</label>
          <input
            type="text"
            name="gender"
            id="gender"
            value={student.gender}
            className="form-control"
            disabled
          />
        </div>

        <div className="form-group mt-3 text-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleNext}
          >
            Continue
          </button>
        </div>
      </div>
    </form>
  );
};

export default GetStudentForm;
