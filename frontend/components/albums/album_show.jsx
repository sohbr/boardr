import React from "react";
import PhotoIndexItem from "../photos/photo_index_item";

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAlbum(this.props.match.params.albumId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.albumId !== newProps.match.params.albumId) {
      this.props.getAlbum(newProps.match.params.albumId);
    }
  }

  render() {
    const { currentUser, album } = this.props;
    if (this.props.album === undefined) {
      return null;
    }
    return (
      <div className="album-show">
        <div className="album-title">{album.title}</div>
        <div className="album-cover-img-div">
          <img className="album-cover-img" src={album.photos[0].img_url} />
        </div>
        <div className="album-description">{album.description}</div>
        <div className="divider" />
        <div className="magic-css">
          {album.photos.map(photo => (
            <PhotoIndexItem key={`key-${photo.id}`} photo={photo} />
          ))}
        </div>
      </div>
    );
  }
}

export default AlbumShow;
