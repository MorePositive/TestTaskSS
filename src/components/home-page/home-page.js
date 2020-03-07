import React from 'react';

import { Redirect } from 'react-router-dom'


const HomePage = ({isLoggedIn}) => {

  if (isLoggedIn) {
    return (
      <div className="container">
        <h2>Welcome to Home page!</h2>
      </div>
    );
  }
    return <Redirect to="/login"/>;
};

export default HomePage;