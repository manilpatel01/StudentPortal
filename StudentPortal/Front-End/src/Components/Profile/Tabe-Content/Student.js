import React from 'react';
import { getBranch } from '../../Registration/data';
function Student({ credentials }) {
  const FullName =
    credentials['first_name'] +
    '  ' +
    credentials['middle_name'] +
    '  ' +
    credentials['last_name'];

  return (
    <div id="student" class="tab-pane fade active show">
      <div class="table-responsive">
        <table class="table">
          <tbody>
            <tr>
              <td>
                <i class="fa fa-user"></i> Full Name
              </td>
              <td>{FullName}</td>
            </tr>
            <tr>
              <td>
                <i class="far fa-envelope"></i> Email ID
              </td>
              <td id="vemail">{credentials['email']}</td>
            </tr>
            <tr>
              <td>
                <i class="fa fa-phone"></i> Mobile Number
              </td>
              <td id="vcontact">{credentials['contact']}</td>
            </tr>
            <tr>
              <td>
                <i class="fa fa-user"></i> Gender
              </td>
              <td id="vgender">{credentials['gender']}</td>
            </tr>
            <tr>
              <td>
                <i class="fa fa-list-ol"></i> Caste
              </td>
              <td id="vcaste">{credentials['caste']}</td>
            </tr>
            <tr>
              <td>
                <i class="fas fa-praying-hands"></i> Religion
              </td>
              <td id="vreligion">{credentials['religion']}</td>
            </tr>
            <tr>
              <td>
                <i class="fa fa-calendar"></i> Addmission Year
              </td>
              <td id="vaddmission_year">{credentials['addmission_year']}</td>
            </tr>
            <tr>
              <td>
                <i class="fas fa-graduation-cap"></i> Semester
              </td>
              <td id="vsemester">{credentials['semester']}</td>
            </tr>
            <tr>
              <td>
                <i class="fas fa-code-branch"></i> Branch
              </td>
              <td id="vbranch">
                {getBranch(credentials['branch'], credentials['course'])}
              </td>
            </tr>
            <tr>
              <td>
                <i class="fas fa-graduation-cap"></i> Course
              </td>
              <td id="vcourse">{credentials['course']}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Student;
