import { combineReducers } from "redux";

import PhotosReducer from "./photos_reducer";
import AlbumsReducer from "./albums_reducer";

const EntitiesReducer = combineReducers({
  photos: PhotosReducer,
  albums: AlbumsReducer
});

export default EntitiesReducer;
