import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

import * as sessionActions from "./actions/session_actions";
import * as photosActions from "./actions/photos_actions";

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});

window.signup = sessionActions.signup;
window.logout = sessionActions.logout;
window.login = sessionActions.login;

window.postPhoto = photosActions.postPhoto;
window.getPhotos = photosActions.getPhotos;
window.getPhoto = photosActions.getPhoto;
window.patchPhoto = photosActions.patchPhoto;
window.deletePhoto = photosActions.deletePhoto;
