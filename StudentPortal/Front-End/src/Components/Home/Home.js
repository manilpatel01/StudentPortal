import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

function Home() {
  return (
    <div className="after-loop">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-8 mb-5 mb-lg-0 mx-auto">
            <Link
              to="/login"
              className="after-loop-item card border-0 card-first shadow-lg"
            >
              <div className="card-body d-flex align-items-end flex-column text-right">
                <h4>Login</h4>
                <i className="fal fa-sign-in-alt"></i>
              </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-8 mb-5 mb-lg-0 mx-auto">
            <Link
              to="/registerStudent"
              className="after-loop-item card border-0 card-second shadow-lg"
            >
              <div className="card-body d-flex align-items-end flex-column text-right">
                <h4>Student Registration</h4>
                <i className="fal fa-user-graduate"></i>
              </div>
            </Link>
          </div>

          {/* <div className="col-lg-4 col-md-8 mb-5 mb-lg-0 mx-auto">
            <Link
              to="/registerFaculty"
              className="after-loop-item card border-0 card-third shadow-lg"
            >
              <div className="card-body d-flex align-items-end flex-column text-right">
                <h4>Faculty Registration</h4>
                <i className="fal fa-pencil-ruler"></i>
              </div>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
