import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login, signup, clearErrors } from "../../actions/session_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors
});

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SessionForm)
);
