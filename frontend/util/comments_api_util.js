export const getComments = photoId =>
  $.ajax({
    method: "GET",
    url: `api/photos/${photoId}/comments`
  });

export const postComment = data =>
  $.ajax({
    method: "POST",
    url: "api/comments",
    data
  });

export const patchComment = comment =>
  $.ajax({
    method: "PATCH",
    url: `api/comments/${comment.id}`,
    data: { comment }
  });

export const deleteComment = comment =>
  $.ajax({
    method: "DELETE",
    url: `api/comments/${comment.id}`
  });
