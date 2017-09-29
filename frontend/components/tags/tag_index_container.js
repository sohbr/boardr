import { connect } from "react-redux";
import { getTags, postTag, deleteTag } from "../../actions/tags_actions";
import values from "lodash/values";
import TagIndex from "./tag_index";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    tags: values(state.entities.tags),
    photo: state.entities.photos[ownProps.match.params.photoId]
  };
};

const mapDispatchToProps = dispatch => ({
  getTags: photoId => dispatch(getTags(photoId)),
  postTag: tag => dispatch(postTag(tag)),
  deleteTag: tag => dispatch(deleteTag(tag))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TagIndex)
);
