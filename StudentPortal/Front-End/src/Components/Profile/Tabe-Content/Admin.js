import React from "react";
import { getBranch } from "../../Registration/data";
function Admin({ credentials }) {
  const FullName =
    credentials["first_name"] +
    "  " +
    credentials["middle_name"] +
    "  " +
    credentials["last_name"];

  const RecidentAddress = (
    <>
      {credentials["re_add_l1"] + ","}
      {credentials["re_add_l2"]}
      <br />
      {credentials["re_add_city"] + ","}
      {credentials["re_add_state"]}
      <br />
      {credentials["re_add_country"] + "-"}
      {credentials["re_add_pin_code"]}
    </>
  );
  return (
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
              <i class="fas fa-graduation-cap"></i> Domain
            </td>
            <td id="vcourse">
              {credentials["role"] && credentials["role"].split("ROLE_")[1]}
            </td>
          </tr>
          <tr>
            <td>
              <i class="far fa-envelope"></i> Faculty Id
            </td>
            <td id="vemail">{credentials["faculty_id"]}</td>
          </tr>
          <tr>
            <td>
              <i class="far fa-envelope"></i> Email ID
            </td>
            <td id="vemail">{credentials["email"]}</td>
          </tr>
          <tr>
            <td>
              <i class="fa fa-phone"></i> Mobile Number
            </td>
            <td id="vcontact">{credentials["contact"]}</td>
          </tr>
          <tr>
            <td>
              <i class="fa fa-user"></i> Gender
            </td>
            <td id="vgender">{credentials["gender"]}</td>
          </tr>
          <tr>
            <td>
              <i class="fa fa-calendar"></i> Birthday
            </td>
            <td id="vdate_of_birth">{credentials["date_of_birth"]}</td>
          </tr>
          <tr>
            <td>
              <i class="fas fa-burn"></i> Blood Group
            </td>
            <td id="vblood_group">{credentials["blood_group"]}</td>
          </tr>
          <tr>
            <td>
              <i class="fa fa-home"></i> Resident Address
            </td>
            <td>
              <address id="vre_add">{RecidentAddress}</address>
            </td>
          </tr>
          <tr>
            <td>
              <i class="fas fa-graduation-cap"></i> Branch year
            </td>
            <td id="vsemester">{credentials["branch_year"]}</td>
          </tr>
          <tr>
            <td>
              <i class="fas fa-code-branch"></i> Branch
            </td>
            <td id="vbranch">
              {getBranch(credentials["branch"], credentials["course"])}
            </td>
          </tr>
          <tr>
            <td>
              <i class="fas fa-graduation-cap"></i> Course
            </td>
            <td id="vcourse">{credentials["course"]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
