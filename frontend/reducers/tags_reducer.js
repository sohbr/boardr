import { merge } from "lodash";
import { RECEIVE_TAGS, RECEIVE_TAG, REMOVE_TAG } from "../actions/tags_actions";

const TagsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);

  switch (action.type) {
    case RECEIVE_TAG:
      newState[action.tag.id] = action.tag;
      return newState;

    case RECEIVE_TAGS:
      return action.tags;

    case REMOVE_TAG:
      delete newState[action.tag.id];
      return newState;

    default:
      return oldState;
  }
};

export default TagsReducer;
