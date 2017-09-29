import React from "react";
import UploadForm from "./upload_form";

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ownername: `${this.props.currentUser.username}`,
      img_url: "",
      title: "",
      description: "",
      height: 0,
      width: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.setUrl = this.setUrl.bind(this);
  }

  setUrl(response) {
    this.setState({
      img_url: response.secure_url,
      height: response.height,
      width: response.width
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postPhoto(this.state).then(photo => {
      this.props.history.push(`/photos/${photo}`);
    });
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <div className="upload-whole">
        <div className="upload-top-half">
          <div className="upload-img-container">
            <UploadForm setUrl={this.setUrl} />
          </div>
        </div>
        <div className="upload-bottom-half">
          <div className="upload-details">
            <form className="upload-form" onSubmit={this.handleSubmit}>
              <label className="upload-title">
                <div className="upload-labels">title</div>
                <input
                  name="title"
                  className="upload-title-input"
                  type="text"
                  value={this.state.title}
                  onChange={this.update("title")}
                />
              </label>
              <br />
              <label className="upload-description">
                <div className="upload-labels">description</div>
                <input
                  name="title"
                  className="upload-title-description"
                  type="text"
                  value={this.state.description}
                  onChange={this.update("description")}
                />
              </label>
              <br />
              <button className="submit-comment" type="submit">
                upload
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoUpload;
