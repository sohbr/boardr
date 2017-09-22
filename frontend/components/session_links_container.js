import { connect } from "react-redux";
import { withRouter } from "react-router";
import SessionLinks from "./session_links";

const mapStateToProps = (state, ownProps) => ({
  location: ownProps.location
});

const mapDispatchToProps = () => ({});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SessionLinks)
);
