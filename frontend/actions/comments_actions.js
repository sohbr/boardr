import * as CommentsAPIUtil from "../util/comments_api_util";

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const postComment = formComment => dispatch =>
  CommentsAPIUtil.postComment(formComment).then(
    comment => {
      dispatch(receiveComment(comment));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const getComments = photoId => dispatch =>
  CommentsAPIUtil.getComments(photoId).then(
    comments => {
      dispatch(receiveComments(comments));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const patchComment = comment => dispatch =>
  CommentsAPIUtil.patchComment(comment).then(
    comment => {
      dispatch(receiveComment(comment));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const deleteComment = formComment => dispatch =>
  CommentsAPIUtil.deleteComment(formComment).then(
    comment => {
      dispatch(removeComment(comment));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );
