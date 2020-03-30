import React from 'react';


const HomePage = ({data}) => {

    return (
      <div className="container">
        <h2>Welcome to Home page! { data && data.userName} </h2>
      </div>
    );
};

export default HomePage;