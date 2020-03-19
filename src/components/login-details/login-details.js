import React from 'react';

import './login-details.css'

const LoginDetails = ({data,onLogout}) => {
  console.log(data)
  const user = data.currentUser
    return (
      <div className="login-details">
        <span className="greeting">Hello, {user.displayName || user.userName}</span>
        {user.photoURL && 
        <div className="user-photo">
        <img className="user-pic" src={user.photoURL} alt="avatar" />
        </div> 
        }
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