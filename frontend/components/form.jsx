import React from "react";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";

import SignupFormContainer from "./signup_form_container";
import LoginFormContainer from "./login_form_container";

const Form = props => {
  console.log(props.location.pathname);
  return (
    <div>
      <Route path="/login" container={LoginFormContainer} />
      <Route path="/signup" container={SignupFormContainer} />
    </div>
  );
};

export default Form;
