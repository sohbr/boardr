import { connect } from "react-redux";
import { getAlbums } from "../../actions/albums_actions";
import AlbumIndex from "./album_index";
import values from "lodash/values";


const mapStateToProps = state => {
  return {
    current_username: state.session.currentUser.username,
    albums: values(state.entities.albums)
  };
};

const mapDispatchToProps = dispatch => ({
  getAlbums: ownername => dispatch(getAlbums(ownername))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);
