import React from "react";
import Modal from "react-modal";

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.comment.id,
      body: this.props.comment.body,
      user_id: this.props.comment.user_id,
      photo_id: this.props.comment.photo_id,
      editModalOpen: false
    };
    this.openEditModal = this.openEditModal.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    };
  }

  openEditModal() {
    this.setState({
      editModalOpen: true
    });
  }

  openDeleteModal() {
    this.setState({
      deleteModalOpen: true
    });
  }

  closeEditModal() {
    this.setState({
      editModalOpen: false
    });
    this.props.clearErrors();
  }

  closeDeleteModal() {
    this.setState({
      deleteModalOpen: false
    });
    this.props.clearErrors();
  }

  handleSubmit() {
    debugger;
    this.props.patchComment(this.state);
    this.closeEditModal();
  }

  handleDelete(e) {
    e.preventDefault();
    const { comment, deleteComment } = this.props;
    deleteComment(comment);
    delete this.props;
  }

  render() {
    const { currentUser, comment } = this.props;
    let editButton, deleteButton;
    if (currentUser) {
      if (currentUser.id === comment.user_id) {
        editButton = (
          <div className="edit-comment" onClick={this.openEditModal}>
            <i className="fa fa-edit" />
          </div>
        );
        deleteButton = (
          <div className="delete-comment" onClick={this.handleDelete}>
            <i className="fa fa-trash" />
          </div>
        );
      }
    }
    return (
      <div className="comment-index-item-container">
        <div className="iic-left-right">
          <div className="comment-iic-left">
            <div className="comment-owner">{`${comment.user.username}:`}</div>
          </div>
          <div className="comment-iic-right">
            <span>{editButton}</span>
            <span>{deleteButton}</span>
          </div>
        </div>
        <div className="comment-itself">{comment.body}</div>
        <Modal
          isOpen={this.state.editModalOpen}
          contentLabel="edit-modal"
          onRequestClose={this.closeEditModal}
          className={"edit-modal"}
          overlayClassName={"edit-modal-overlay"}
        >
          <div className="edit-title-description-modal">
            <form onSubmit={this.handleSubmit} className="edit-form">
              <div className="edit-form-2">
                <label className="edit-title-description-label">
                  comment body
                  <input
                    name="body"
                    className="edit-title-input"
                    type="text"
                    value={this.state.body}
                    onChange={this.update("body")}
                  />
                </label>
                <br />
                <br />
                <button className="submit-edit" type="submit">
                  edit
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CommentIndexItem;
