import React from "react";
import Footer from "../footer";

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getPhoto(this.props.match.params.photoId);
  }

  componentWillReceiveProps(newProps) {
    const { match: { params: { photoId } }, getPhoto } = this.props;
    if (photoId !== newProps.match.params.photoId) {
      getPhoto(newProps.match.params.photoId);
    }
  }

  render() {
    return (
      <div>
        <div className="show-top-half">
          <div className="show-page-img-container">
            <img className="show-page-img" src={this.props.photo.img_url} />
          </div>
        </div>
        <div className="show-bottom-half">
          <div className="show-bottom-left" />
          <div className="show-bottom-right" />
        </div>
      </div>
    );
  }
}

export default PhotoShow;
