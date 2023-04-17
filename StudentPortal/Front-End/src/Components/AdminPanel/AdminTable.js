import React from 'react';
import { getBranch } from '../Registration/data';

const AdminTable = (props) => {
  const { data, setAdmin } = props;
  const renderData = (data) => {
    return data.map((admin, i) => {
      return (
        <tr key={admin.faculty_id}>
          <td>{i + 1}</td>
          <td>{admin.faculty_id}</td>

          <td className="text-uppercase">
            {admin.first_name} {admin.middle_name} {admin.last_name}
          </td>

          <td>{admin.email}</td>
          <td>{admin.contact}</td>

          <td>{admin.course}</td>
          <td>{getBranch(admin.branch, admin.course)}</td>

          <td>
            <button
              className="btn btn-outline-primary btn-sm"
              data-toggle="modal"
              data-target="#viewAdminProfileModal"
              data-id={admin.faculty_id}
              onClick={() => setAdmin(admin)}
            >
              View Profile
            </button>
          </td>
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
            <th>Faculty_id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No.</th>
            <th>Course</th>
            <th>Branch</th>
            <th>View Profile</th>
          </tr>
        </thead>
        <tbody>{renderData(data)}</tbody>
      </table>
    </div>
  );
};

export default AdminTable;
