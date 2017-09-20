import React from "react";

import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = this.state;
    this.props.processForm({ user });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loggedIn) {
      this.props.history.push("/");
    }
  }

  navLink() {
    if (this.props.formType === "login") {
      return <Link to="/signup">Need to create an account?</Link>;
    } else {
      return <Link to="/login">Already have an account?</Link>;
    }
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    };
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form">
            <label>
              Username
              <input
                className="login-form-input"
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
              />
            </label>
            <br />
            <label>
              Password
              <input
                className="login-form-input"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </label>
            <br />
            <input type="submit" value="Log in" />
          </div>

          {this.navLink()}
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);

//
