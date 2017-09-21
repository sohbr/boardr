import React from "react";
import { Link } from "react-router-dom";
import SessionLinks from "./session_links";

const loggedInLinks = (currentUser, logout) => (
  <div>
    <h2 className="header-name">Welcome, {currentUser.username}.</h2>
    <button className="header-logout-button" onClick={logout}>
      Log Out
    </button>
  </div>
);

const rightBar = (currentUser, logout) => (
  <div className="right-nav">
    {currentUser ? loggedInLinks(currentUser, logout) : <SessionLinks />}
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
