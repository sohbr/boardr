import React from "react";

import { Link, withRouter } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = this.state;
    this.props.signup({ user });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loggedIn) {
      this.props.history.push("/");
    }
  }

  navLink() {
    return <Link to="/login">Already have an account?</Link>;
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
              email
              <input
                className="login-input"
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
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
            <button type="submit" value={"sign up!"} />
          </div>

          {this.navLink()}
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);

//
