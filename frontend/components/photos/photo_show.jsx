import React from "react";
import Footer from "../footer";
import Modal from "react-modal";

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.photo.title,
      description: this.props.photo.description,
      ownername: this.props.photo.ownername,
      img_url: this.props.photo.img_url,
      id: this.props.photo.id,
      editModalOpen: false,
      deleteModalOpen: false
    };

    this.openEditModal = this.openEditModal.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getPhoto(this.props.match.params.photoId);
  }

  componentWillReceiveProps(newProps) {
    const { match: { params: { photoId } }, getPhoto } = this.props;
    if (photoId !== newProps.match.params.photoId) {
      getPhoto(newProps.match.params.photoId);
    }
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

  handleDelete() {
    this.props.deletePhoto(this.props.photo.id).then(username => {
      this.props.history.push(`/users/${username}`);
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.patchPhoto(this.state);
    this.closeEditModal();
  }

  render() {
    return (
      <div>
        <div className="show-top-half">
          <div className="show-page-img-container">
            <img className="show-page-img" src={this.props.photo.img_url} />
          </div>
          <button
            className="delete-photo-button"
            onClick={this.openDeleteModal}
          >
            <i className="fa fa-trash-o" aria-hidden="true" />
          </button>
          <button className="edit-photo-button" onClick={this.openEditModal}>
            <i className="fa fa-pencil-square-o" aria-hidden="true" />
          </button>
        </div>
        <div className="show-bottom-half">
          <div className="show-bottom-left">
            <div className="show-bottom-left-photo-details">
              <div className="show-bottom-left-user-img">
                <div>user profile image</div>
              </div>
              <div className="show-bottom-left-user-title-description">
                <div className="--username">{this.props.photo.ownername}</div>
                <div className="--title">{this.props.photo.title}</div>
                <div className="--description">
                  {this.props.photo.description}
                </div>
              </div>
            </div>
            <div className="COMMENTS WILL GO HERE">comments</div>
          </div>
          <div className="show-bottom-right" />
        </div>
        <Modal
          isOpen={this.state.deleteModalOpen}
          contentLabel="delete-modal"
          onRequestClose={this.closeDeleteModal}
          className={"delete-modal"}
          overlayClassName={"delete-modal-overlay"}
        >
          <div className="delete-modal-delete-confirmation">
            Are you sure you want to delete?
            <button className="confirmation-button" onClick={this.handleDelete}>
              YES
            </button>
            <button
              className="confirmation-button"
              onClick={this.closeDeleteModal}
            >
              NO
            </button>
          </div>
        </Modal>
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
                  title
                  <input
                    name="title"
                    className="edit-title-description-input"
                    type="text"
                    value={this.state.title}
                    onChange={this.update("title")}
                  />
                </label>
                <br />

                <label className="edit-title-description-label">
                  description
                  <input
                    name="description"
                    className="edit-title-description-input"
                    type="text"
                    value={this.state.description}
                    onChange={this.update("description")}
                  />
                </label>
                <br />
                <br />
                <button className="submit-edit" type="submit">
                  EDIT
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default PhotoShow;
