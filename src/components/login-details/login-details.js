import React from 'react';

import './login-details.css'

const LoginDetails = ({data, onLogout}) => {

    return (
      <div className="login-details">
        <span className="greeting">Hello, {data.userName}</span>
        {/* {socialData.photoURL && 
        <div className="user-photo">
        <img className="user-pic" src={socialData.photoURL} alt="avatar" />
        </div> 
        } */}
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