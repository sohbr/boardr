import merge from "lodash/merge";
import {
  RECEIVE_PHOTO,
  RECEIVE_PHOTOS,
  REMOVE_PHOTO
} from "../actions/photos_actions";

const PhotosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);

  switch (action.type) {
    case RECEIVE_PHOTO:
      newState[action.photo.id] = action.photo;
      return newState;

    case RECEIVE_PHOTOS:
      return action.photos;

    case REMOVE_PHOTO:
      delete newState[action.photoId];
      return newState;

    default:
      return oldState;
  }
};

export default PhotosReducer;
