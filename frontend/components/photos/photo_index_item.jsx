import React from "react";
import { Link } from "react-router-dom";

class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { photo } = this.props;

    return (
      <Link
        key={`photo-${photo.id}`}
        to={`/photos/${photo.id}`}
        className="photo-item"
        style={{
          width: photo.width * 200 / photo.height + "px",
          flexGrow: photo.width * 200 / photo.height
        }}
      >
        <i
          className="i-photo-index"
          style={{ paddingBottom: photo.height / photo.width * 100 + "%" }}
        />
        <img className="photo-item-photo" src={photo.img_url} />
      </Link>
    );
  }
}

export default PhotoIndexItem;
