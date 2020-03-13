import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from '../header/header'
import HomePage from '../pages/home-page/home-page'
import AboutPage from '../pages/about-page/about-page';
import SendForm from '../pages/send-form-page/send-form'
import GalleryPage from '../pages/gallery-page/gallery-page'
import UsersPage from '../pages/users-page/users-page'


const BaseContainer = ({data, firebaseOut}) => {

  return (
    <Router>
      
      <Header data={data} firebaseOut={firebaseOut}/>
      <Switch>
      <Route path='/dashboard' render={() => <HomePage data={data} />} exact />
      <Route path='/about' render={() => <AboutPage />} />
      <Route path='/form' render={() => <SendForm />} />
      <Route path='/gallery' render={() => <GalleryPage />} />
      <Route path='/users' render={() => <UsersPage/>} />
      <Redirect to='/dashboard' />
      </Switch>
    </Router>
  )
};

export default BaseContainer;