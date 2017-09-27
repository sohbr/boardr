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
    return (
      <div className="album-index">
        <div className="album-title">albums</div>
      </div>
    );
  }
}

export default AlbumIndex;
