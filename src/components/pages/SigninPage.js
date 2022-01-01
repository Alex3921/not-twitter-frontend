import React, { Component } from "react";
import { connect } from "react-redux";
import { signinUser } from "../../actions/authActions";

import "./SigninPage.css";

export class SigninPage extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signinUser(this.state);
    this.setState({
      username: "",
      password: "",
    });
    window.history.pushState("","","/home")
    window.location.reload()
  };

  render() {
    return (
      <div className="signin__page">
        <form onSubmit={this.handleSubmit}>
          <div className="username">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              name="username" 
              onChange={this.handleChange} 
              />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="submit__btn">
            <input type="submit" placeholder="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signinUser: (user) => dispatch(signinUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(SigninPage);
