import { connect } from "react-redux";
import {
  getComments,
  deleteComment,
  patchComment,
  postComment,
  clearErrors
} from "../../actions/comments_actions";
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
  patchComment: (comment, id) => dispatch(patchComment(comment)),
  deleteComment: comment => dispatch(deleteComment(comment)),
  postComment: comment => dispatch(postComment(comment)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
