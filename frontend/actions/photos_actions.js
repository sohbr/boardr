import * as PhotosAPIUtil from "../util/photos_api_util";

export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const removePhoto = photoId => ({
  type: REMOVE_PHOTO,
  photoId
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const postPhoto = photo => dispatch => {
  return PhotosAPIUtil.postPhoto(photo).then(
    returnedPhoto => {
      dispatch(receivePhoto(returnedPhoto));
      dispatch(clearErrors());
      return returnedPhoto.id;
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const patchPhoto = photo => dispatch =>
  PhotosAPIUtil.patchPhoto(photo).then(
    returnedPhoto => {
      dispatch(receivePhoto(returnedPhoto));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const getPhoto = photoId => dispatch =>
  PhotosAPIUtil.getPhoto(photoId).then(
    photo => {
      dispatch(receivePhoto(photo));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const getPhotos = ownername => dispatch =>
  PhotosAPIUtil.getPhotos(ownername).then(
    photos => {
      dispatch(receivePhotos(photos));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const deletePhoto = photoId => dispatch =>
  PhotosAPIUtil.deletePhoto(photoId).then(
    photo => {
      dispatch(removePhoto(photo));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );
