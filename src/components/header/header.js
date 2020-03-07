import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'

const Header = ({onLogout}) => {
  return (
    <div className="header">
      <div className="container d-flex">
      <h3>
        <Link to="/" className="logo">
          Test<span className="logo-sub">Task</span>
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/about" className="menu-item">About</Link>
        </li>
        <li>
          <Link to="/form" className="menu-item">Send Me Form</Link>
        </li>
        <li>
          <Link to="gallery" className="menu-item">Gallery</Link>
        </li>
      </ul>
      <button 
      className="login-info"
      onClick={onLogout}
      >
        Logout
      </button>
      </div>
    </div>
  );
};

export default Header;