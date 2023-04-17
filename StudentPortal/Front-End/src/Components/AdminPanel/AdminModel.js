import React, { useState, useEffect } from 'react';
import Admin from '../Profile/Tabe-Content/Admin';

function AdminModel({ credential }) {
  const [admin, setAdmin] = useState();
  useEffect(() => {
    setAdmin(credential);
  }, [credential]);
  return (
    <div
      class="modal fade"
      id="viewAdminProfileModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="viewAdminProfileModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="viewAdminProfileModalLabel">
              Admin Profile
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
                    src={
                      admin && window.location.origin + '/' + admin['photo_url']
                    }
                    id="admin_photo"
                    alt="Profile"
                  />
                  <img
                    className="img-fluid img-thumbnail mt-3"
                    src={
                      admin && window.location.origin + '/' + admin['sign_url']
                    }
                    id="admin_sign"
                    alt="signature"
                  />
                </div>
                <div className="col-sm-9">
                  {admin && <Admin credentials={admin} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminModel;
