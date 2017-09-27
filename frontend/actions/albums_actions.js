import * as AlbumsAPIUtil from "../util/albums_api_util";

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const REMOVE_ALBUM = "REMOVE_ALBUM";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const removeAlbum = album => ({
  type: REMOVE_ALBUM,
  album
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const postAlbum = album => dispatch => {
  return AlbumsAPIUtil.postAlbum(album).then(
    returnedAlbum => {
      dispatch(receiveAlbum(returnedAlbum));
      dispatch(clearErrors());
      return returnedAlbum.id;
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const patchAlbum = album => dispatch =>
  AlbumsAPIUtil.patchAlbum(album).then(
    returnedAlbum => {
      dispatch(receiveAlbum(returnedAlbum));
      dispatch(clearErrors());
      return returnedAlbum.id;
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const getAlbum = albumId => dispatch =>
  AlbumsAPIUtil.getAlbum(albumId).then(
    album => {
      dispatch(receiveAlbum(album));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const getAlbums = ownername => dispatch =>
  AlbumsAPIUtil.getAlbums(ownername).then(
    albums => {
      dispatch(receiveAlbums(albums));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const deleteAlbum = albumId => dispatch =>
  AlbumsAPIUtil.deleteAlbum(albumId).then(
    album => {
      dispatch(removeAlbum(album));
      dispatch(clearErrors());
      return album.ownername;
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );
