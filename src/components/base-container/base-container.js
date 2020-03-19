import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from '../header/header'
import HomePage from '../pages/home-page/home-page'
import AboutPage from '../pages/about-page/about-page';
import SendForm from '../pages/send-form-page/send-form'
import GalleryPage from '../pages/gallery-page/gallery-page'
import UsersPage from '../pages/users-page/users-page'
import UsersFetch from '../pages/users-page/usersFetch'


const BaseContainer = ({data, onLogout}) => {

  return (
    <Router>
      
      <Header data={data} onLogout={onLogout}/>
      <Switch>
      <Route path='/dashboard' render={() => <HomePage data={data} />} exact />
      <Route path='/about' render={() => <AboutPage />} />
      <Route path='/form' render={() => <SendForm />} />
      <Route path='/gallery' render={() => <GalleryPage />} />
      <Route path='/users' render={() => <UsersPage data={data} />} />
      {/* <Route path='/users' render={() => <UsersFetch />} /> */}
      <Redirect to='/dashboard' />
      </Switch>
    </Router>
  )
};

export default BaseContainer;