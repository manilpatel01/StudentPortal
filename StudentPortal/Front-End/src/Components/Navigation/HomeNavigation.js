import React from 'react';
import { Link } from 'react-router-dom';

function HomeNavigation() {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/student/">
          Student-panel
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/admin/">
          Admin-panel
        </Link>
      </li>
    </>
  );
}

export default HomeNavigation;
