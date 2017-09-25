import { connect } from "react-redux";
import { getPhoto, deletePhoto } from "../../actions/photos_actions";
import PhotoShow from "./photo_show";
import { clearErrors } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    photo: state.entities.photos[parseInt(ownProps.match.params.photoId)]
  };
};

const mapDispatchToProps = dispatch => ({
  getPhoto: id => dispatch(getPhoto(id)),
  deletePhoto: id => dispatch(deletePhoto(id)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);
