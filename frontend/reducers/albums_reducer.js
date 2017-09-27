import merge from "lodash/merge";

import {
  RECEIVE_ALBUM,
  RECEIVE_ALBUMS,
  REMOVE_ALBUM
} from "../actions/albums_actions";

const AlbumsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);

  switch (action.type) {
    case RECEIVE_ALBUM:
      newState[action.album.id] = action.album;
      return newState;

    case RECEIVE_ALBUMS:
      return action.albums;

    case REMOVE_ALBUM:
      delete newState[action.album.id];
      return newState;

    default:
      return oldState;
  }
};

export default AlbumsReducer;
