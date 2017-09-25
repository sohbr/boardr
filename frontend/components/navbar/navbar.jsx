import React from "react";
import { Link } from "react-router-dom";
import SessionFormContainer from "../session_form/session_form_container";

const loggedInLinks = (currentUser, logout) => (
  <div className="logged-in-links">
    <h2 className="header-name">Welcome, {currentUser.username}.</h2>
    <Link
      className="header-upload-button"
      to={`/users/${currentUser.username}/upload`}
    >
      upload link
      <i class="fa-cloud-upload" aria-hidden="true" />
    </Link>

    <button className="header-logout-button" onClick={logout}>
      Log Out
      <i class="fa fa-power-off" aria-hidden="true" />
    </button>
  </div>
);

const rightBar = (currentUser, logout) => (
  <div className="right-nav">
    {currentUser ? (
      loggedInLinks(currentUser, logout)
    ) : (
      <SessionFormContainer />
    )}
  </div>
);

const NavBar = ({ currentUser, logout }) => (
  <nav className="main-nav">
    <div className="left-nav">
      <ul>
        <li className="logo">
          <img
            className="logo-icon"
            src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5754411.jpg"
            alt="snowboard icon"
          />
        </li>
        <li className="logo-name">boardr</li>
      </ul>
    </div>

    {rightBar(currentUser, logout)}
  </nav>
);

export default NavBar;
