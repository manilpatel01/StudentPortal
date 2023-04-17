import React, { useState } from 'react';
import UpdateStudentInfo from './update_student_info';
import UpdateAdminInfo from './update_admin_info';

function UpdateUserInfo() {
  const initialValue = 'admin';
  const [profile, setProfile] = useState(initialValue);

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col">
          <div className="w-50 mx-auto">
            <h1>Edit </h1>
            <div className="from-group mb-4">
              <select
                className="form-control"
                onChange={(e) => setProfile(e.target.value)}
              >
                <option value="admin">Admin</option>
                <option value="student">Student</option>
              </select>
            </div>

            {profile === 'student' && <UpdateStudentInfo />}
            {profile === 'admin' && <UpdateAdminInfo />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateUserInfo;
