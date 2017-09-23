import { RECEIVE_ERRORS, CLEAR_ERRORS } from "../actions/session_actions";

const ErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;

    case CLEAR_ERRORS:
      return [];

    default:
      return oldState;
  }
};

export default ErrorsReducer;
