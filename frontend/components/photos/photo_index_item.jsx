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
        <img className="photo-item-photo" src={photo.img_url} />
        {photo.title}
      </div>
    );
  }
}

export default PhotoIndexItem;
