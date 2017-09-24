import React from "react";
import { Link } from "react-router-dom";

class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { photo } = this.props;
    return (
      <div className="photo-item">
        <a>
          <img src={photo.img_url} />
        </a>
      </div>
    );
  }
}

export default PhotoIndexItem;
