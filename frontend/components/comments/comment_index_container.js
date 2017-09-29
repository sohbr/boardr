import { connect } from "react-redux";
import { getComments, deleteComment } from "../../actions/comments_actions";
import values from "lodash/values";
import CommentIndex from "./comment_index";

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    comments: values(state.entities.comments)
  };
};

const mapDispatchToProps = dispatch => ({
  getComments: photoId => dispatch(getComments(photoId)),
  deleteComment: comment => dispatch(deleteComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);