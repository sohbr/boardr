import { merge } from "lodash";
import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from "../actions/comment_actions";

const CommentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);

  switch (action.type) {
    case RECEIVE_COMMENT:
      newState[action.comment.id] = action.comment;
      return newState;

    case RECEIVE_COMMENTS:
      return action.comments;

    case REMOVE_COMMENT:
      delete newState[action.comment.id];
      return newState;

    default:
      return oldState;
  }
};

export default CommentsReducer;
