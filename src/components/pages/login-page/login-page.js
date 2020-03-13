import React from 'react';
import {Link} from 'react-router-dom';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import './login-page.css'

const LoginPage = ({uiConfig, firebaseAuth}) => {

    return (
      <div className="login-page d-flex justify-content-center align-items-center">
        <div className="login-container d-flex justify-content-center align-items-center">
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="login-email">E-mail:</label>
              <input type="email" className="form-control" id="login-email" placeholder="Enter email" autoComplete="username" />
            </div>
            <div className="form-group">
              <label htmlFor="login-password">Password:</label>
              <input type="password" className="form-control" id="login-password" placeholder="Password" autoComplete="current-password" />
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="login-check"/>
              <label className="form-check-label" htmlFor="login-check">Remember me</label>
            </div>
            <button 
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
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} />
          </form>
        </div>
      </div>
    );
};

export default LoginPage;