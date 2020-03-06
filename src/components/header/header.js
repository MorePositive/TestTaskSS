import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="container d-flex">
      <h3>
        <a className="logo" href="/">
          Test<span className="logo-sub">Task</span>
        </a>
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
      <span className="login-info">Login please</span>
      </div>
    </div>
  );
};

export default Header;