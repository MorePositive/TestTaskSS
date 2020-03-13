import React from 'react';

import './login-details.css'

const LoginDetails = ({data,firebaseOut}) => {

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
};

export default LoginDetails;