import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import SignupFormContainer from "./signup_form_container";
import LoginFormContainer from "./login_form_container";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import FormContainer from "./form_container";

const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class SessionLinks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signupIsOpen: false,
      loginIsOpen: false
    };

    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.closeSignupModal = this.closeSignupModal.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);
    this.openSignupModal = this.openSignupModal.bind(this);
  }

  openLoginModal() {
    this.props.history.push("/login");
    this.setState({
      signupIsOpen: true
    });
  }

  openSignupModal() {
    this.props.history.push("/signup");
    this.setState({
      loginIsOpen: true
    });
  }

  closeLoginModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  closeSignupModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  render() {
    return (
      <div>
        <nav className="login-signup">
          <button className="login-button" onClick={this.openLoginModal}>
            Log In
          </button>

          <button className="signup-button" onClick={this.openSignupModal}>
            Sign Up
          </button>
        </nav>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Signup-Login-Modal"
        >
          <FormContainer />
        </Modal>
      </div>
    );
  }
}

export default SessionLinks;
