import React from "react";
import NavBarContainer from "./navbar/navbar_container";
import { Route } from "react-router-dom";
import UploadForm from "./upload_form";
import Footer from "./footer.jsx";

import PhotoIndexContainer from "./photos/photo_index_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <section>
      <ProtectedRoute path="/users/:userId" component={PhotoIndexContainer} />
    </section>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;
