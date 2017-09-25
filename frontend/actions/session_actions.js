import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = user => dispatch =>
  SessionAPIUtil.signup(user).then(
    user2 => {
      dispatch(receiveCurrentUser(user2));
      dispatch(clearErrors());
      return user2.username;
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const login = user => dispatch =>
  SessionAPIUtil.login(user).then(
    user2 => {
      dispatch(receiveCurrentUser(user2));
      dispatch(clearErrors());
      return user2.username;
    },
    err => {
      dispatch(receiveErrors(err.responseJSON));
    }
  );

export const logout = () => dispatch =>
  SessionAPIUtil.logout().then(
    () => dispatch(receiveCurrentUser(null)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
