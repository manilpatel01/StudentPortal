import React from 'react';
import { getBranch } from '../Registration/data';

const StudentTable = (props) => {
  const { data, setStud, fields, setDetaintEr } = props;
  const renderData = (data) => {
    return data.map((student, i) => {
      return (
        <tr key={student.enrollment}>
          <td>{i + 1}</td>
          {fields.enrollment && <td>{student.enrollment}</td>}
          {fields.name && (
            <td className="text-uppercase">
              {student.first_name} {student.middle_name} {student.last_name}
            </td>
          )}
          {fields.semester && <td>{student.semester}</td>}
          {fields.email && <td>{student.email}</td>}
          {fields.contact && <td>{student.contact}</td>}
          {fields.branch && (
            <td>{getBranch(student.branch, student.course)}</td>
          )}
          {fields.course && <td>{student.course}</td>}
          {fields.addmission_year && <td>{student.addmission_year}</td>}
          {fields.gender && <td>{student.gender}</td>}
          {fields.caste && <td>{student.caste}</td>}

          {fields.profile && (
            <td>
              <button
                className="btn btn-outline-primary btn-sm"
                data-toggle="modal"
                data-target="#viewProfileModal"
                data-id={student.enrollment}
                onClick={() => setStud(student)}
              >
                View Profile
              </button>
            </td>
          )}
          {fields.detain && (
            <td>
              <button
                className="btn btn-outline-danger btn-sm"
                data-toggle="modal"
                data-target="#detainStudentModal"
                onClick={() => setDetaintEr(student.enrollment)}
              >
                Detain Student
              </button>
            </td>
          )}
        </tr>
      );
    });
  };

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover" id="table-to-xls">
        <thead>
          <tr>
            <th>Sr No.</th>
            {fields.enrollment && <th>Enroll No.</th>}
            {fields.name && <th>Name</th>}
            {fields.semester && <th>Semester</th>}
            {fields.email && <th>Email</th>}
            {fields.contact && <th>Mobile No</th>}
            {fields.branch && <th>Branch</th>}
            {fields.course && <th>Course</th>}
            {fields.addmission_year && <th>Addmission Year</th>}
            {fields.gender && <th>Gender</th>}
            {fields.caste && <th>Caste</th>}
            {fields.profile && <th>View Profile</th>}
            {fields.detain && <th>Detain</th>}
          </tr>
        </thead>
        <tbody>{renderData(data)}</tbody>
      </table>
    </div>
  );
};

export default StudentTable;
