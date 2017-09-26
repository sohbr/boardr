import React from "react";
import PropTypes from "prop-types";
import { Link, Route, withRouter } from "react-router-dom";
import PhotoIndexItem from "./photo_index_item";

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getPhotos } = this.props;
    getPhotos(this.props.current_username);
  }

  render() {
    if (!Array.isArray(this.props.photos) || this.props.photos.length === 0) {
      return null;
    }

    return (
      <div className="photo-index">
        <div className="magic-css">
          {this.props.photos.map(photo => (
            <PhotoIndexItem key={`key-${photo.id}`} photo={photo} />
          ))}
        </div>
      </div>
    );
  }
}

export default PhotoIndex;
