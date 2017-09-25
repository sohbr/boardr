import { connect } from "react-redux";
import { getPhoto } from "../../actions/photos_actions";
import PhotoShow from "./photo_show";

const mapStateToProps = (state, ownProps) => {
  return {
    photo: state.entities.photos[parseInt(ownProps.match.params.photoId)]
  };
};

const mapDispatchToProps = dispatch => ({
  getPhoto: id => dispatch(getPhoto(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);
