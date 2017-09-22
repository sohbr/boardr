import { connect } from "react-redux";
import { withRouter } from "react-router";

import Form from "./form";

const mapStateToProps = (state, ownProps) => ({
  location: ownProps.location
});

export default withRouter(connect(null)(Form));
