import { combineReducers } from "redux";

import PhotosReducer from "./photos_reducer";
import AlbumsReducer from "./albums_reducer";
import CommentsReducer from "./comments_reducer";

const EntitiesReducer = combineReducers({
  photos: PhotosReducer,
  albums: AlbumsReducer,
  comments: CommentsReducer
});

export default EntitiesReducer;
