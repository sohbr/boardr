export const getAllPhotos = () =>
  $.ajax({
    method: "GET",
    url: "/api/photos"
  });

export const postPhoto = photo =>
  $.ajax({
    method: "POST",
    url: `/api/users/${photo.ownerId}/photos`,
    data: { photo }
  });

export const getPhotos = ownername =>
  $.ajax({
    method: "GET",
    url: `/api/users/${ownername}/photos`
  });

export const getPhoto = photoId =>
  $.ajax({
    method: "GET",
    url: `/api/photos/${photoId}`,
    data: { photoId }
  });

export const patchPhoto = photo =>
  $.ajax({
    method: "PATCH",
    url: `/api/photos/${photo.id}`,
    data: { photo }
  });

export const deletePhoto = photoId =>
  $.ajax({
    method: "DELETE",
    url: `/api/photos/${photoId}`,
    data: { photoId }
  });
