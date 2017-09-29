import * as TagsAPIUtil from "../util/tag_api_util";

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});

export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

export const removeTag = tag => ({
  type: REMOVE_TAG,
  tag
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const getTags = userId => dispatch =>
  TagsAPIUtil.getTags(userId).then(
    tags => {
      dispatch(receiveTags(tags));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const postTag = formTag => dispatch =>
  TagsAPIUtil.postTag(formTag).then(
    tag => {
      dispatch(receiveTag(tag));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const deleteTag = formTag => dispatch =>
  TagsAPIUtil.deleteTag(formTag).then(
    tag => {
      dispatch(removeTag(tag));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );
