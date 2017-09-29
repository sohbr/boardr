export const getTags = photoId =>
  $.ajax({
    method: "GET",
    url: `api/photos/${photoId}/tags`
  });

export const postTag = data =>
  $.ajax({
    method: "POST",
    url: "api/tags",
    data
  });

export const deleteTag = tag =>
  $.ajax({
    method: "DELETE",
    url: `api/tags/${tag.id}`
  });
