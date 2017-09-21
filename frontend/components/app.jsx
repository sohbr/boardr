import React from "react";
import NavBarContainer from "./navbar_container";
import SessionFormContainer from "./session_form_container";
import { Route } from "react-router-dom";

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
