import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from '../pages/login-page/login-page'


const StartPageContainer = ({uiConfig, firebaseAuth}) => {

  return (
    <Router> 
    <Switch>
    
      <Route path='/login'
      render={() => <LoginPage uiConfig={uiConfig} firebaseAuth={firebaseAuth}/>} />
      <Route path='/signup'
      render={() => <h2>Ok!</h2>} />
    <Redirect to="/login"/>
    </Switch>
    </Router>
  )
};

export default StartPageContainer;