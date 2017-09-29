import { connect } from "react-redux";
import { getAllPhotos } from "../../actions/photos_actions";
import Explore from "./explore";
import values from "lodash/values";

const mapStateToProps = state => ({
  photos: values(state.entities.photos)
});

const mapDispatchToProps = dispatch => ({
  getAllPhotos: () => dispatch(getAllPhotos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
