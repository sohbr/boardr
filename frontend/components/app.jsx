import React from "react";
import NavBarContainer from "./navbar_container";
import SessionFormContainer from "./session_form_container";
import { Route } from "react-router-dom";
import UploadForm from "./upload_form";

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
    <UploadForm />
  </div>
);

export default App;
