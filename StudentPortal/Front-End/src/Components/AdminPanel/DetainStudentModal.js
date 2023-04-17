import Axios from 'axios';
import React, { useState } from 'react';
import { APIENDPOINTS } from '../../redux/api_endpoint';
import Loading from '../../Util/Loading';

const DetainStudentModal = ({ detaintEr }) => {
  const [res, setRes] = useState({});
  const [loading, setLoading] = useState(false);

  const detainStudent = async () => {
    setLoading(true);
    await Axios.get(APIENDPOINTS.detainStudent(detaintEr))
      .then((res) => {
        console.log(res.data.message);
        setRes({ success: true });
      })
      .catch((err) => {
        console.log(err);
        setRes({ error: true });
      });
    setLoading(false);
    setTimeout(() => {
      setRes({});
      document.getElementById('detainStudentModalClose').click();
    }, 3000);
  };

  return (
    <div
      className="modal fade"
      id="detainStudentModal"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Are you sure?</h5>
            <button
              type="button"
              className="close"
              id="detainStudentModalClose"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <h5>
              Are you sure you want to detain this student with enrollement:{' '}
              {detaintEr}?
            </h5>
            {loading === true ? (
              <Loading />
            ) : (
              res.error && (
                <div
                  className="alert alert-danger"
                  style={{ textAlign: 'center' }}
                >
                  There's Might Be Some Server Error
                </div>
              )
            )}
            {res.success && (
              <div
                className="alert alert-success"
                style={{ textAlign: 'center' }}
              >
                Student Detain SucccesFully
              </div>
            )}
            <div className="modal-footer">
              <button
                type="button"
                onClick={detainStudent}
                className="btn btn-danger"
              >
                Detain
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetainStudentModal;
