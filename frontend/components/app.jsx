import React from "react";
import NavBarContainer from "./navbar/navbar_container";
import { Route } from "react-router-dom";
import UploadForm from "./upload_form";
import Main from "./main";
import Footer from "./footer";
import PhotoShowContainer from "./photos/photo_show_container";

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
      <Route exact path="/photos/:photoId" component={PhotoShowContainer} />
    </section>
  </div>
);

export default App;
