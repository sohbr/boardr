import React from "react";
import PropTypes from "prop-types";
import { Link, Route, withRouter } from "react-router-dom";
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
      <div className="photo-index">
        <ul>
          {this.props.photos.map(photo => (
            <Link to={`/photos/${photo.id}`}>
              <PhotoIndexItem key={`photo-${photo.id}`} photo={photo} />
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default PhotoIndex;
