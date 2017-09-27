export const postAlbum = album =>
  $.ajax({
    method: "POST",
    url: `/api/users/${album.ownername}/albums`,
    data: { album }
  });

export const getAlbums = ownername =>
  $.ajax({
    method: "GET",
    url: `/api/users/${ownername}/albums`
  });

export const getAlbum = albumId =>
  $.ajax({
    method: "GET",
    url: `/api/albums/${albumId}`
  });

export const patchAlbum = album =>
  $.ajax({
    method: "PATCH",
    url: `/api/albums/${album.id}`,
    data: { album }
  });

export const deleteAlbum = albumId =>
  $.ajax({
    method: "DELETE",
    url: `/api/albums/${albumId}`
  });
