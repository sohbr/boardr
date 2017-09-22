import { connect } from "react-redux";
import SignupForm from "./signup_form";
import { login, signup } from "../actions/session_actions";
import { withRouter } from "react-router";

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: user => dispatch(signup(user))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignupForm)
);
