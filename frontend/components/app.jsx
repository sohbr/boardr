import React from "react";
import NavBarContainer from "./navbar/navbar_container";
import { Route } from "react-router-dom";
import UploadForm from "./upload_form";
import Main from "./main";
import Footer from "./footer";

import PhotoIndexContainer from "./photos/photo_index_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <section>
      <AuthRoute exact path="/" component={Main} />
      <ProtectedRoute path="/users/:userId" component={PhotoIndexContainer} />
    </section>
  </div>
);

export default App;
