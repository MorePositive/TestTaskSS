import React from 'react';

import { Redirect } from 'react-router-dom'


const HomePage = ({isLoggedIn,data}) => {


  if (isLoggedIn) {
    return (
      <div className="container">
        <h2>Welcome to Home page! {data.currentUser.displayName}</h2>
      </div>
    );
  }
    return <Redirect to="/login"/>;
};

export default HomePage;