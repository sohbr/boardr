import React from "react";
import Modal from "react-modal";

import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      ///
      modalIsOpen: false
    };
    this.formType = "";

    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changeForm = this.changeForm.bind(this);
    this.navLink = this.navLink.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.formType === "sign up") {
      //
      this.props.signup(this.state);
    } else {
      this.props.login(this.state);
    }
  }

  openModal(formType) {
    this.formType = formType; //
    this.setState({
      modalIsOpen: true
      ///
    });
  }

  closeModal() {
    this.formType = ""; //
    this.setState({
      modalIsOpen: false,
      ///
      username: "",
      password: ""
    });
    this.props.clearErrors();
  }

  changeForm() {
    this.props.clearErrors();

    if (this.formType === "log in") {
      this.formType = "sign up";
    } else {
      this.formType = "log in";
    }
  }

  navLink() {
    if (this.formType === "log in") {
      //
      return (
        <button onClick={this.changeForm}>Need to create an account?</button>
      );
    } else {
      return (
        <button onClick={this.changeForm}>Already have an account?</button>
      );
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
      <div>
        <nav className="login-signup">
          <button
            className="login-button"
            onClick={() => this.openModal("log in")}
          >
            Log In
          </button>

          <button
            className="signup-button"
            onClick={() => this.openModal("sign up")}
          >
            Sign Up
          </button>
        </nav>

        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="Modal"
          onRequestClose={this.closeModal}
          className={{
            base: "session-form-modal"
          }}
          overlayClassName={{
            base: "session-form-overlay"
          }}
        >
          <button onClick={() => this.closeModal()}>
            <i className="fa fa-times" aria-hidden="true" />
          </button>

          <div className="form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <div className="session-form">
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
                <input type="submit" value={this.formType} />
              </div>

              {this.navLink()}
              {this.renderErrors()}
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SessionForm;

//
