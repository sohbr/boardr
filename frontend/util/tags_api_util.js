export const getTags = photoId =>
  $.ajax({
    method: "GET",
    url: `api/photos/${photoId}/tags`
  });

export const postTag = tag =>
  $.ajax({
    method: "POST",
    url: "api/tags",
    data: { tag }
  });

export const deleteTag = tag =>
  $.ajax({
    method: "DELETE",
    url: `api/tags/${tag.id}`,
    data: { tag }
  });
