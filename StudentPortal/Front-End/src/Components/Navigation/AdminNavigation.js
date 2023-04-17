import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function AdminNavigation() {
  const role = useSelector((state) => state.User.credentials.role);
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/admin/">
          DashBoard
        </Link>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
          Pendding
        </a>
        <ul class="dropdown-menu">
          <li className="nav-item">
            <Link className="nav-link" to="/admin/pendingVerification">
              Pendding Student
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/pendingDocument">
              Pendding Document
            </Link>
          </li>
        </ul>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
          Search
        </a>
        <ul class="dropdown-menu">
          <li className="nav-item">
            <Link className="nav-link" to="/admin/findDocument">
              Search Student
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/search-student">
              Search Document
            </Link>
          </li>
        </ul>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/importExcel">
          Import Student
        </Link>
      </li>

      {role === 'ROLE_DEPARTMENT' && (
        <li className="nav-item">
          <Link className="nav-link" to="/admin/progressionBySem">
            Semester Progression
          </Link>
        </li>
      )}

      {role === 'ROLE_SSHEAD' && (
        <li className="nav-item">
          <Link className="nav-link" to="/admin/updateStudentOrAdmin">
            Update Users
          </Link>
        </li>
      )}

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
          <i className="fa fa-user"></i>
        </a>
        <ul class="dropdown-menu">
          <li className="nav-item">
            <Link className="nav-link" to="/profile/">
              View Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/logout">
              Logout
            </Link>
          </li>
        </ul>
      </li>
    </>
  );
}

export default AdminNavigation;
