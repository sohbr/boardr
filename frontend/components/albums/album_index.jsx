import React from "react";
import AlbumIndexItem from "./album_index_item";

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAlbums(this.props.current_username);
  }

  render() {
    const { albums } = this.props;
    return (
      <div className="album-index">
        <div className="album-title">Albums</div>
        <div className="album-index-container" />
        {albums.map(album => (
          <AlbumIndexItem key={`key-${album.id}`} album={album} />
        ))}
      </div>
    );
  }
}

export default AlbumIndex;
