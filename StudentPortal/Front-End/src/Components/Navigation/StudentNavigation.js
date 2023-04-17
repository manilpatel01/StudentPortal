import React from 'react';
import { Link } from 'react-router-dom';

function StudentNavigation() {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/student/">
          DashBoard
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/profile">
          View-Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/student/request">
          Request Certificate
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/logout">
          Logout
        </Link>
      </li>
    </>
  );
}

export default StudentNavigation;
