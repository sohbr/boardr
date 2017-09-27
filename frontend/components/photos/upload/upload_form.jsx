import React from "react";
import Dropzone from "react-dropzone";
import request from "superagent";

const CLOUDINARY_UPLOAD_PRESET = "ilylycp7"; // <-- update with preset id
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/sohnbrian/upload";

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFileCloudinaryUrl: ""
    };
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== "") {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
        this.props.setUrl(response.body);
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.uploadedFileCloudinaryUrl === "" ? (
          <div className="FileUpload">
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop.bind(this)}
            >
              <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
          </div>
        ) : (
          <div className="container-for-image-after-upload">
            <img
              className="image-after-upload"
              src={this.state.uploadedFileCloudinaryUrl}
            />
          </div>
        )}
      </div>
    );
  }
}
export default UploadForm;
