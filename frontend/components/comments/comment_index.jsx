import React from "react";
import { Route, withRouter } from "react-router-dom";

import CommentIndexItem from "./comment_index_item";

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: this.props.currentUser.id,
      photo_id: this.props.match.params.photoId,
      body: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    };
  }

  componentDidMount() {
    this.props.getComments(parseInt(this.props.match.params.photoId));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postComment(this.state);
    this.setState({
      body: ""
    });
  }

  render() {
    const {
      comments,
      currentUser,
      deleteComment,
      patchComment,
      clearErrors
    } = this.props;

    const commentItems =
      comments &&
      comments.map(comment => (
        <CommentIndexItem
          key={`comment${comment.id}`}
          comment={comment}
          currentUser={currentUser}
          deleteComment={deleteComment}
          patchComment={patchComment}
          clearErrors={clearErrors}
        />
      ));

    return (
      <div className="comment-index-container">
        <div className="comment-index-container-left" />
        <div className="comment-index-container-right">
          <div className="comments-header">Comments</div>
          <ul className="comment-index">{commentItems}</ul>
          <form className="add-comment-form" onSubmit={this.handleSubmit}>
            <textarea
              className="add-comment"
              value={this.state.body}
              placeholder="...add a comment..."
              onChange={this.update("body")}
            />
            <button className="submit-comment" type="submit">
              add comment
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(CommentIndex);
