import React from "react";
import { Route, withRouter } from "react-router-dom";

import CommentIndexItem from "./comment_index_item";

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getComments(parseInt(this.props.match.params.photoId));
  }

  render() {
    const { comments, currentUser, deleteComment } = this.props;

    const commentItems =
      comments &&
      comments.map(comment => (
        <CommentIndexItem
          key={`comment${comment.id}`}
          comment={comment}
          currentUser={currentUser}
          deleteComment={deleteComment}
        />
      ));

    return (
      <div className="comment-index-container">
        <div className="comments-header">Comments</div>
        <ul className="comment-index">{commentItems}</ul>
      </div>
    );
  }
}

export default withRouter(CommentIndex);
