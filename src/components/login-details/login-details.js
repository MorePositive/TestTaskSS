import React from 'react';
import { Link } from 'react-router-dom'

import './login-details.css'

const LoginDetails = ({data,isLoggedIn,firebaseOut}) => {

  if (isLoggedIn) {
    return (
      <div className="login-details">
        <span className="greeting">Hello, {data.currentUser.displayName}</span>
        <div className="user-photo">
        <img className="user-pic" src={data.currentUser.photoURL} alt="avatar" />
        </div>
        <button 
        className="btn"
        onClick={firebaseOut}
        >
          Logout
        </button>
      </div>
  );
  }
  return (
    <div className="login-details">
    <Link 
      to="/login"
      className="login-info btn"
    >
        Login please
    </Link>
    </div>
  )
};

export default LoginDetails;