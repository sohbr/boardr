import React from "react";

import { Link, withRouter } from "react-router-dom";

class LoginForm extends React.Component {
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
    this.props.login({ user });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loggedIn) {
      this.props.history.push("/");
    }
  }

  navLink() {
    return <Link to="/signup">Need to create an account?</Link>;
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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form">
            <label>
              username
              <input
                className="login-input"
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
              />
            </label>
            <br />

            <label>
              password
              <input
                className="login-input"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </label>
            <br />
            <button type="submit">Log In</button>
          </div>

          {this.navLink()}
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default LoginForm;

//
