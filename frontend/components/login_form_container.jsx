import { connect } from "react-redux";
import LoginForm from "./login_form";
import { login } from "../actions/session_actions";
import { withRouter } from "react-router";

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: user => dispatch(login(user))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginForm)
);
