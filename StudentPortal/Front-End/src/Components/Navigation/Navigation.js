import React, { useEffect } from 'react';
import './Navigation.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import HomeNavigation from './HomeNavigation';
import StudentNavigation from './StudentNavigation';
import AdminNavigation from './AdminNavigation';

function Navigation() {
  const authenticated = useSelector((state) => state.User.authenticated);
  const role = useSelector((state) => state.User.credentials.role);

  useEffect(() => {
    document
      .querySelector('#navigation-bar .navbar-toggler')
      .addEventListener('click', () => {
        document.getElementById('navbarToggler').classList.toggle('show');
        document
          .querySelector('#navigation-bar .overlay')
          .classList.toggle('show');
      });
  }, []);

  useEffect(() => {
    document
      .querySelectorAll(
        '#navigation-bar .overlay, #navbarToggler li:not(.dropdown)'
      )
      .forEach((q) => {
        q.addEventListener('click', () => {
          document.getElementById('navbarToggler').classList.remove('show');
          document
            .querySelector('#navigation-bar .overlay')
            .classList.remove('show');
        });
      });
  }, [role, authenticated]);

  return (
    <nav id="navigation-bar">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              id="logo-header"
              className="img-fluid"
              src="/static/images/header.png"
              alt="LDCE LOGO"
              title="L.D. College of Engineering"
            />
          </Link>
          <img
            id="logo-header"
            className="pull-right navbar-right-logo d-lg-block d-none"
            src="/static/images/affiliated.png"
            alt="Approved by AICTE and Affiliated to GTU"
          />
          <button className="navbar-toggler" type="button">
            <span className="fa fa-bars"></span>
          </button>
        </div>
      </nav>
      <div className="overlay"></div>
      <nav
        id="navbarToggler"
        className="navbar navbar-expand-lg navbar-collapse mobile-sidebar"
      >
        <ul className="navbar-nav">
          {authenticated ? (
            role === 'ROLE_STUDENT' ? (
              <StudentNavigation />
            ) : (
              <AdminNavigation />
            )
          ) : (
            <HomeNavigation />
          )}
        </ul>
      </nav>
    </nav>
  );
}

export default Navigation;
