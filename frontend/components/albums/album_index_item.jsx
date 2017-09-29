import React from "react";

import { Link } from "react-router-dom";

class AlbumIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { album } = this.props;

    if (album.photos[0] === undefined) {
      return null;
    }

    return (
      <Link
        key={`album-${album.id}`}
        to={`/albums/${album.id}`}
        className="stack"
      >
        <img className="album-item-photo" src={album.photos[0].img_url} />
        <div> {album.title}</div>
      </Link>
    );
  }
}

export default AlbumIndexItem;
