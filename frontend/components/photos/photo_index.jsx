import React from "react";
import PropTypes from "prop-types";
import { Route, withRouter } from "react-router-dom";
import PhotoIndexItem from "./photo_index_item";

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { match: { params: { userId } }, getPhotos } = this.props;
    getPhotos(parseInt(userId));
  }

  render() {
    if (!Array.isArray(this.props.photos) || this.props.photos.length === 0) {
      return null;
    }

    return (
      <div className="user-index">
        <ul>
          {this.props.photos.map(photo => (
            <PhotoIndexItem key={`photo-${photo.id}`} photo={photo} />
          ))}
        </ul>
      </div>
    );
  }
}

export default PhotoIndex;
