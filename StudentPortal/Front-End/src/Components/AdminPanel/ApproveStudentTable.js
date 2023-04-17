import React from 'react';
import axios from 'axios';
import { APIENDPOINTS } from '../../redux/api_endpoint';

function ApproveStudentTable({ setStud, students, setStudents, filteredSem }) {
  const handleAction = (enrollment, status, comment) => {
    document.getElementById(`reject-${enrollment}`).disabled = 'true';
    document.getElementById(`approve-${enrollment}`).disabled = 'true';

    var formData = new FormData();
    formData.set('enrollment', enrollment);
    formData.set('status', status);
    if (status !== 1) {
      formData.set('comment', comment);
    }
    axios
      .post(APIENDPOINTS.facultyApprove(), formData)
      .then((res) => {
        setStudents(students.filter((s) => s.enrollment !== enrollment));
      })
      .catch((e) => {
        console.log(e);
        document.getElementById(`reject-${enrollment}`).disabled = false;
        document.getElementById(`approve-${enrollment}`).disabled = false;
      });
  };

  const data = students
    .filter((stud) => !filteredSem || stud.semester == filteredSem)
    .map((stud, i) => {
      return (
        <tr key={stud.enrollment}>
          <td>{i + 1}</td>
          <td>{stud.enrollment}</td>
          <td>
            {stud.first_name} {stud.middle_name} {stud.last_name}
          </td>
          <td>{stud.semester}</td>
          <td>
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              id={i}
              data-toggle="modal"
              data-target="#viewProfileModal"
              onClick={(e) => setStud(stud)}
            >
              View Profile
            </button>
          </td>
          <td>{stud.faculty_comment || 'New Request'}</td>
          <td>
            <button
              type="button"
              className="btn btn-outline-success btn-sm"
              id={`approve-${stud.enrollment}`}
              onClick={(e) => {
                e.preventDefault();
                handleAction(stud.enrollment, 1, null);
              }}
            >
              Aprrove
            </button>
          </td>
          <td>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAction(stud.enrollment, 2, e.target.comment.value);
              }}
            >
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  name="comment"
                  placeholder="comment"
                  required
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    id={`reject-${stud.enrollment}`}
                    className="btn btn-outline-danger btn-sm"
                  >
                    Reject
                  </button>
                </div>
              </div>
            </form>
          </td>
        </tr>
      );
    });

  return (
    <div className="table-responsive">
      {data.length === 0 ? (
        <h1 className="text-center">
          No {filteredSem}th Sem Student Found For Approval!
        </h1>
      ) : (
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Enroll No.</th>
              <th>Name</th>
              <th>Semester</th>
              <th>View Profile</th>
              <th>Comment</th>
              <th>Approve</th>
              <th>Unapprove</th>
            </tr>
          </thead>
          <tbody>{data}</tbody>
        </table>
      )}
    </div>
  );
}

export default ApproveStudentTable;
