import { connect } from "react-redux";

import { getAlbum } from "../../actions/albums_actions";
import AlbumShow from "./album_show";
import { clearErrors } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    album: state.entities.albums[ownProps.match.params.albumId]
  };
};

const mapDispatchToProps = dispatch => ({
  getAlbum: albumId => dispatch(getAlbum(albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);
