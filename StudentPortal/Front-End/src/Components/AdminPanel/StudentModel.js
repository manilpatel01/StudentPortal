import React, { useState, useEffect } from "react";
import Student from "../Profile/Tabe-Content/Student";
import Personal from "../Profile/Tabe-Content/Personal";
import Family from "../Profile/Tabe-Content/Family";

function StudentModel({ credential }) {
  const [student, setstudent] = useState();
  useEffect(() => {
    setstudent(credential);
  }, [credential]);
  return (
    <div
      class="modal fade"
      id="viewProfileModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="viewProfileModalLabel"
      aria-hidden="true"
    >
      {console.log("student model")}
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="viewProfileModalLabel">
              Student Profile
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="modal-xl">
              <div className="row">
                <div className="col-sm-3">
                  <img
                    className="img-fluid img-thumbnail"
                    src={student && window.location.origin +"/"+student["photo_url"]}
                    id="student_photo"
                    alt="Profile"
                  />
                  <img
                    className="img-fluid img-thumbnail mt-3"
                    src={student && window.location.origin + "/"+student["sign_url"]}
                    id="student_sign"
                    alt="signature"
                  />
                </div>
                <div className="col-sm-9">
                  <ul class="nav nav-tabs viewProfileTab">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        data-toggle="tab"
                        href="#student"
                      >
                        <i class="fas fa-user-graduate"></i> Student Details
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#personal">
                        <i class="fa fa-bookmark"></i> Personal Details
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#family">
                        <i class="fa fa-info"></i> Family Details
                      </a>
                    </li>
                  </ul>

                  {student ? (
                    <div class="tab-content">
                      <Student credentials={student} />
                      <Personal personal={student.info} />
                      <Family family={student.guardian} />{" "}
                    </div>
                  ) : (
                    <div class="tab-content"> </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentModel;
