import React from "react";
import Footer from "./footer";

const mainWelcome = () => {
  return (
    <div className="main-welcome">
      <h1 className="main-welcome-title">Explore the slopes.</h1>
      <h2 className="main-welcome-description">
        Join the Boardr community and share your experiences.
      </h2>
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <div className="background-img">{mainWelcome()}</div>
    </div>
  );
};

export default Main;
