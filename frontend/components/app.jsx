import React from "react";
import NavBarContainer from "./navbar/navbar_container";
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import Main from "./main";
import Footer from "./footer";
import PhotoShowContainer from "./photos/photo_show_container";
import PhotoUploadContainer from "./photos/upload/photo_upload_container";

import PhotoIndexContainer from "./photos/photo_index_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <section>
      <Switch>
        <ProtectedRoute
          exact
          path="/users/:username"
          component={PhotoIndexContainer}
        />
        <Route exact path="/photos/:photoId" component={PhotoShowContainer} />
        <ProtectedRoute
          exact
          path="/users/:username/upload"
          component={PhotoUploadContainer}
        />
        <AuthRoute exact path="/" component={Main} />
      </Switch>
    </section>
  </div>
);

export default App;
