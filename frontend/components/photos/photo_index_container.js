import React from "react";
import { connect } from "react-redux";
import { getPhotos } from "../../actions/photos_actions";
import PhotoIndex from "./photo_index";
import { withRouter } from "react-router-dom";
import values from "lodash/values";

const UserIndexContainer = props => {
  console.log("mounting container");
  return <UserIndex {...props} />;
};

const mapStateToProps = state => {
  return {
    photos: values(state.entities.photos)
  };
};

const mapDispatchToProps = dispatch => ({
  getPhotos: ownerId => dispatch(getPhotos(ownerId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);
