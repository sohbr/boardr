import { connect } from "react-redux";
import { getTags, postTag, deleteTag } from "../../actions/tags_actions";
import values from "lodash/values";
import TagIndex from "./tag_index";

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  tags: values(state.entities.tags)
});

const mapDispatchToProps = dispatch => ({
  getTags: photoId => dispatch(getTags(photoId)),
  postTag: tag => dispatch(postTag(tag)),
  deleteTag: tag => dispatch(deleteTag(tag))
});

export default connect(mapStateToProps, mapDispatchToProps)(TagIndex);
