import React from "react";
import PhotoIndexItem from "../photos/photo_index_item";

class Explore extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllPhotos();
  }

  render() {
    if (!Array.isArray(this.props.photos) || this.props.photos.length === 0) {
      return null;
    }

    let randomizedPhotos = this.props.photos.sort(function() {
      return 0.5 - Math.random();
    });

    return (
      <div className="photo-index">
        <div className="photostream-title">Explore</div>
        <div className="magic-css">
          {randomizedPhotos.map(photo => (
            <PhotoIndexItem key={`key-${photo.id}`} photo={photo} />
          ))}
        </div>
      </div>
    );
  }
}

export default Explore;
