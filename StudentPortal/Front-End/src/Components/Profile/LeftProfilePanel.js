import React from "react";

function LeftProfile({ sign, photo,faculty_approve }) {
  return (
    <div className="col-sm-3 text-center">
      <img
        className="img-fluid img-thumbnail"
        src={photo}
        id="student_photo"
        alt="Profile"
      />
      <button
        className="btn btn-success btn-block btn-lg mt-3"
        data-toggle="modal"
        data-target="#change_photo"
      >
        <i className="fa fa-edit"></i> Change Photo
      </button>

      <img
        className="img-fluid img-thumbnail mt-3"
        src={sign}
        id="student_sign"
        alt="signature"
      />
      <button
        className="btn btn-success btn-block btn-lg mt-3"
        data-toggle="modal"
        data-target="#change_sign"
      >
        <i className="fa fa-edit"></i> Change Sign
      </button>

      {!faculty_approve && <button
        className="btn btn-success btn-block btn-lg mt-3"
        data-toggle="modal"
        data-target="#edit_profile"
      >
        <i className="fa fa-edit"></i> Edit Profile
      </button>}
      <button
        className="btn btn-success btn-block btn-lg mt-3"
        data-toggle="modal"
        data-target="#change_password"
      >
        <i className="fa fa-edit"></i> Change Password
      </button>
    </div>
  );
}

export default LeftProfile;
