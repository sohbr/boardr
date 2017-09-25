import React from "react";
import Modal from "react-modal";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      modalIsOpen: false
    };
    this.formType = "";

    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changeForm = this.changeForm.bind(this);
    this.navLink = this.navLink.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.formType === "sign up") {
      this.props.signup(this.state).then(id => {
        this.props.history.push(`/users/${id}`);
      });
    } else {
      this.props.login(this.state).then(id => {
        this.props.history.push(`/users/${id}`);
      });
    }
  }

  openModal(formType) {
    this.formType = formType;
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal() {
    this.formType = "";
    this.setState({
      modalIsOpen: false,
      username: "",
      password: ""
    });
    this.props.clearErrors();
  }

  changeForm() {
    if (this.formType === "log in") {
      this.formType = "sign up";
    } else {
      this.formType = "log in";
    }
    this.props.clearErrors();
  }

  navLink() {
    if (this.formType === "log in") {
      return (
        <button
          className="form-swap-button"
          type="button"
          onClick={this.changeForm}
        >
          need to create an account?
        </button>
      );
    } else {
      return (
        <button
          className="form-swap-button"
          type="button"
          onClick={this.changeForm}
        >
          already have an account?
        </button>
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
            log in
          </button>

          <button
            className="signup-button"
            onClick={() => this.openModal("sign up")}
          >
            sign up
          </button>
        </nav>

        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="Signup-Login-Modal"
          onRequestClose={this.closeModal}
          className={"session-form-modal"}
          overlayClassName={"overlay"}
        >
          <div className="form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <ul>
                <li className="logo">
                  <img
                    className="logo-icon"
                    src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5754411.jpg"
                    alt="snowboard icon"
                  />
                </li>
                <li className="logo-name">boardr</li>
              </ul>

              <div className="session-form">
                <label className="username-password">
                  username
                  <input
                    name="username"
                    className="login-input"
                    type="text"
                    value={this.state.username}
                    onChange={this.update("username")}
                  />
                </label>
                <br />

                <label className="username-password">
                  password
                  <input
                    name="password"
                    className="login-input"
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                  />
                </label>
                <br />
                <br />
                <button
                  className="submit-modal"
                  type="submit"
                  value={this.formType}
                >
                  {this.formType}
                </button>
              </div>
              <br />
              {this.navLink()}
              <br />
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
