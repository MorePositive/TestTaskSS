import React from 'react';
import { Redirect } from 'react-router-dom'

import './login-page.css'

const LoginPage = ({onLogin, isLoggedIn}) => {

  if (isLoggedIn) {
    return <Redirect to="/" />
  }

  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="login-container d-flex justify-content-center align-items-center">
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="login-email">E-mail:</label>
            <input type="email" className="form-control" id="login-email" placeholder="Enter email"/>
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Password:</label>
            <input type="password" className="form-control" id="login-password" placeholder="Password"/>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="login-check"/>
            <label className="form-check-label" htmlFor="login-check">Remember me</label>
          </div>
          <button 
          type="submit" 
          className="btn btn-primary"
          onClick={onLogin}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;