import { connect } from "react-redux";

import { postPhoto } from "../../../actions/photos_actions";

import PhotoUpload from "./photo_upload";

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  postPhoto: photo => dispatch(postPhoto(photo))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUpload);
