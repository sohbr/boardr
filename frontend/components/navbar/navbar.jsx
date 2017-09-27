import React from "react";
import { Link } from "react-router-dom";
import SessionFormContainer from "../session_form/session_form_container";

const loggedInLinks = (currentUser, logout) => (
  <div className="logged-in-links">
    <img className="header-img" src={currentUser.img_url} />
    <Link
      className="header-upload-button"
      to={`/users/${currentUser.username}/upload`}
    >
      <i className="fa fa-cloud-upload" aria-hidden="true" />
    </Link>

    <button className="header-logout-button" onClick={logout}>
      <i className="fa fa-power-off" aria-hidden="true" />
    </button>
  </div>
);

const leftBar = currentUser => {
  return (
    <div className="leftbar-logged-in-links">
      <Link className="leftbar-buttons" to={`/users/${currentUser.username}`}>
        Photostream
      </Link>
      <Link
        className="leftbar-buttons"
        to={`/users/${currentUser.username}/albums`}
      >
        Albums
      </Link>
      <Link className="leftbar-buttons" to={`/explore`}>
        Explore
      </Link>
    </div>
  );
};

const rightBar = (currentUser, logout) => (
  <div className="right-nav">
    {currentUser ? (
      loggedInLinks(currentUser, logout)
    ) : (
      <SessionFormContainer />
    )}
  </div>
);

const NavBar = ({ currentUser, logout }) => {
  return (
    <nav className="main-nav">
      <div className="left-nav">
        {currentUser ? (
          <ul>
            <li className="logo">
              <Link to={`/users/${currentUser.username}`}>
                <img
                  className="logo-icon"
                  src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5754411.jpg"
                  alt="snowboard icon"
                />
              </Link>
            </li>
            <Link className="logo-name" to={`/users/${currentUser.username}`}>
              boardr
            </Link>
            {leftBar(currentUser)}
          </ul>
        ) : (
          <ul>
            <li className="logo">
              <Link to="/">
                <img
                  className="logo-icon"
                  src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5754411.jpg"
                  alt="snowboard icon"
                />
              </Link>
            </li>
            <Link className="logo-name" to="/">
              boardr
            </Link>
          </ul>
        )}
      </div>

      {rightBar(currentUser, logout)}
    </nav>
  );
};
export default NavBar;
