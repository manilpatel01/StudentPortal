import Axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { APIENDPOINTS } from '../../redux/api_endpoint';
import Loading from '../../Util/Loading';

function SemesterProgression() {
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(2);
  const [formError, setFormError] = useState();
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRes();
    try {
      if (from == to) {
        setFormError("From and to can't be same.");
        return;
      } else {
        setFormError();
      }

      setLoading(true);
      const res = await Axios.get(APIENDPOINTS.progressionBySem(), {
        params: { from, to },
      });
      setRes({ type: 'success', msg: res.data });
    } catch (err) {
      console.log(err);
      setRes({ type: 'danger', msg: err });
    }
    setLoading(false);
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-6 mx-auto">
          <form onSubmit={handleSubmit}>
            <h2>Update Semester</h2>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">From:</label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  onChange={(e) => setFrom(e.target.value)}
                  value={from}
                >
                  {[...Array(8).keys()].map((e, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">To:</label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  onChange={(e) => setTo(e.target.value)}
                  value={to}
                >
                  {[...Array(8).keys()].map((e, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {formError && (
              <div className="row">
                <label className="col-sm-2 col-form-label"></label>
                <label className="error">{formError}</label>
              </div>
            )}
            <div className="form-group row">
              <label className="col-sm-2 col-form-label"></label>
              <div className="col-sm-10">
                <button
                  type="submit"
                  class="btn btn-primary"
                  disabled={loading}
                >
                  Update Semester
                </button>
              </div>
            </div>
            {loading === true ? (
              <Loading />
            ) : (
              res?.type && (
                <div
                  className={`alert alert-${res.type}`}
                  style={{ textAlign: 'center' }}
                >
                  {res.msg}
                </div>
              )
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SemesterProgression;
