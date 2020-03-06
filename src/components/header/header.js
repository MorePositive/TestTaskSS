import React from 'react';

import './header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="container d-flex">
      <h3>
        <a className="logo" href="#">
          Test<span className="logo-sub">Task</span>
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a className="menu-item" href="#">About</a>
        </li>
        <li>
          <a className="menu-item" href="#">Send Me Form</a>
        </li>
        <li>
          <a className="menu-item" href="#">Gallery</a>
        </li>
      </ul>
      <span className="login-info">Login please</span>
      </div>
    </div>
  );
};

export default Header;