import { connect } from "react-redux";
import { getPhotos } from "../../actions/photos_actions";
import PhotoIndex from "./photo_index";
import { withRouter } from "react-router-dom";
import values from "lodash/values";

const mapStateToProps = state => {
  return {
    current_username: state.session.currentUser.username,
    photos: values(state.entities.photos)
  };
};

const mapDispatchToProps = dispatch => ({
  getPhotos: ownername => dispatch(getPhotos(ownername))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);
