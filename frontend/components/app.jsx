import React from "react";
import NavBarContainer from "./navbar/navbar_container";
import { Route, withRouter } from "react-router-dom";
import { Switch } from "react-router";
import Main from "./main";
import Footer from "./footer";
import PhotoShowContainer from "./photos/photo_show_container";
import PhotoUploadContainer from "./photos/upload/photo_upload_container";
import PhotoIndexContainer from "./photos/photo_index_container";
import AlbumIndexContainer from "./albums/album_index_container";
import AlbumShowContainer from "./albums/album_show_container";
import ExploreContainer from "./explore/explore_container";

import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = props => (
  <main>
    <header>
      <NavBarContainer />
    </header>
    <section className={props.location.pathname === "/" ? "homepage" : ""}>
      <Switch>
        <AuthRoute exact path="/" component={Main} />
        <ProtectedRoute exact path="/" component={PhotoIndexContainer} />
        <ProtectedRoute
          exact
          path="/users/:username"
          component={PhotoIndexContainer}
        />
        <ProtectedRoute
          exact
          path="/photos/:photoId"
          component={PhotoShowContainer}
        />
        <ProtectedRoute
          exact
          path="/users/:username/upload"
          component={PhotoUploadContainer}
        />
        <ProtectedRoute
          exact
          path="/users/:username/albums"
          component={AlbumIndexContainer}
        />
        <ProtectedRoute
          exact
          path="/albums/:albumId"
          component={AlbumShowContainer}
        />
        <ProtectedRoute exact path="/explore" component={ExploreContainer} />
      </Switch>
    </section>
    <Footer className={props.location.pathname === "/" ? "homepage" : ""} />
  </main>
);

export default withRouter(App);
