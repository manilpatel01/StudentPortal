import React from 'react';

function Personal({ personal }) {
  const RecidentAddress = (
    <>
      {personal['re_add_l1'] + ','}
      {personal['re_add_l2']}
      <br />
      {personal['re_add_city'] + ','}
      {personal['re_add_state']}
      <br />
      {personal['re_add_country'] + '-'}
      {personal['re_add_pin_code']}
    </>
  );
  const ParmanentAddress = (
    <>
      {personal['pr_add_l1'] + ','}
      {personal['pr_add_l2']}
      <br />
      {personal['pr_add_city'] + ','}
      {personal['pr_add_state']}
      <br />
      {personal['pr_add_country'] + '-'}
      {personal['pr_add_pin_code']}
    </>
  );

  return (
    <div id="personal" class="tab-pane fade">
      <div class="table-responsive">
        <table class="table">
          <tbody>
            <tr>
              <td>
                <i class="fa fa-user"></i> Father's Name
              </td>
              <td id="vfather_name">{personal['father_name']}</td>
            </tr>

            <tr>
              <td>
                <i class="fa fa-user"></i> Mother's Name
              </td>
              <td id="vmother_name">{personal['mother_name']}</td>
            </tr>
            <tr>
              <td>
                <i class="fa fa-id-card"></i> Aadhar Card
              </td>
              <td id="vaadhar">{personal['aadhar']}</td>
            </tr>
            <tr>
              <td>
                <i class="fa fa-id-card"></i> Voter ID
              </td>
              <td>{personal['voter_id']}</td>
            </tr>
            <tr>
              <td>
                <i class="fa fa-calendar"></i> Birthday
              </td>
              <td id="vdate_of_birth">{personal['date_of_birth']}</td>
            </tr>
            <tr>
              <td>
                <i class="fas fa-burn"></i> Blood Group
              </td>
              <td id="vblood_group">{personal['blood_group']}</td>
            </tr>
            <tr>
              <td>
                <i class="fas fa-burn"></i> thelasemia
              </td>
              <td>{personal['thelasemia']}</td>
            </tr>
            <tr>
              <td>
                <i class="fa fa-check"></i> Leave in LD Hostel
              </td>
              <td>{personal['is_in_ld_hostel'] ? 'Yes' : 'No'}</td>
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
                <i class="fa fa-home"></i> Permanent Address
              </td>
              <td>
                <address id="vpr_add">{ParmanentAddress}</address>
              </td>
            </tr>
            <tr>
              <td>
                <i class="fa fa-calendar"></i> SSC Year
              </td>
              <td id="vssc_year">{personal['ssc_year']}</td>
            </tr>
            <tr>
              <td>
                <i class="fas fa-registered"></i> SSC PR
              </td>
              <td id="vssc_pr">{personal['ssc_pr']}</td>
            </tr>
            <tr>
              <td>
                <i class="fa fa-calendar"></i> HSC Year
              </td>
              <td id="vhsc_year">{personal['hsc_year']}</td>
            </tr>
            <tr>
              <td>
                <i class="fas fa-registered"></i> HSC PR
              </td>
              <td id="vhsc_pr">{personal['hsc_pr']}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Personal;
