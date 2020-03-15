import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from '../pages/login-page/login-page'
import SignUpPage from '../pages/sign-up-page/sign-up'

import './start-page-container.css'


const StartPageContainer = ({onLogin, uiConfig, firebaseAuth}) => {

  return (
    <div className="StartPageContainer d-flex justify-content-center align-items-center">
    <Router> 
    <Switch>
      <Route path='/login'
      render={() => <LoginPage uiConfig={uiConfig} firebaseAuth={firebaseAuth} onLogin={onLogin} />} />
      <Route path='/signup'
      render={() => <SignUpPage />} />
    <Redirect to="/login"/>
    </Switch>
    </Router>
    </div>
  )
};

export default StartPageContainer;