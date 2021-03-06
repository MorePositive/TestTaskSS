import React from 'react';

import './login-details.css'

const LoginDetails = ({data, onLogout}) => {

    return (
      <div className="login-details">
        <span className="greeting">Hello, {data.userName || data.displayName}</span>
        { data && data.photoURL ? 
        <div className="user-photo">
        <img className="user-pic" src={data.photoURL} alt="avatar" />
        </div> 
        : null}
        <button 
        className="btn"
        onClick={onLogout}
        >
          Logout
        </button>
      </div>
  );
};

export default LoginDetails;