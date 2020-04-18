import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import './login-page.css'
export default class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = props.onSubmit;
    this.onLogin = this.onLogin.bind(this);
    this.resetForm = props.resetForm.bind(this);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name] : e.target.value });
  }

  onLogin(e) {
    this.onSubmit(e, this.state.email, this.state.password);
    this.resetForm();
  }

  render() {
    return (
      <div className="login-container login-wh">
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="login-email">E-mail:</label>
            <input value={this.state.email} onChange={this.handleChange} name="email" type="email" className="form-control" id="email_field" placeholder="Enter email" autoComplete="username" />
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Password:</label>
            <input value={this.state.password} onChange={this.handleChange} name="password" type="password" className="form-control" id="password_field" placeholder="Password" autoComplete="current-password" />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="login-check"/>
            <label className="form-check-label" htmlFor="login-check">Remember me</label>
          </div>
          <button
          onClick={this.onLogin}
          type="submit" 
          className="btn btn-primary btn-block"
          >
            Sign in
          </button>
          <Link to='/signup' 
          className="btn btn-primary btn-block"
          >
            Sign up
          </Link>
          <StyledFirebaseAuth uiConfig={this.props.uiConfig} firebaseAuth={this.props.firebaseAuth} />
        </form>
      </div>
    );
  }
};