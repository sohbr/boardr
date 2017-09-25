import React from "react";
import Footer from "./footer";

const mainWelcome = () => {
  return (
    <section className="main-welcome">
      <div className="landing">
        <h1 className="main-welcome-title">Explore the slopes.</h1>
        <h2 className="main-welcome-description">
          Join the Boardr community and share your experiences.
        </h2>
      </div>
    </section>
  );
};

const Main = () => {
  return (
    <div className="main-div">
      <div className="background-img" />
      {mainWelcome()}
      <Footer />
    </div>
  );
};

export default Main;
