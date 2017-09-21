import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import SignupFormContainer from "./signup_form_container";
import LoginFormContainer from "./login_form_container";
import { Route, Link } from "react-router-dom";

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
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
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
          <button className="login-button" onClick={this.openModal}>
            <Link to="/login">Log In</Link>
          </button>

          <button className="signup-button" onClick={this.openModal}>
            <Link to="/signup">Sign Up</Link>
          </button>
        </nav>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Route path="/login" component={LoginFormContainer} />
          <Route path="/signup" component={SignupFormContainer} />
        </Modal>
      </div>
    );
  }
}

export default SessionLinks;
