import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie'

import Header from '../header/header'
import HomePage from '../pages/home-page/home-page'
import AboutPage from '../pages/about-page/about-page';
import SendForm from '../pages/send-form-page/send-form'
import GalleryPage from '../pages/gallery-page/gallery-page'
import UsersPage from '../pages/users-page/users-page'


const BaseContainer = ({userdata, onLogout}) => {

  // const userdata = JSON.parse(Cookies.get('currentUser'));
  // const userdata = this.state.currentUser;

  return (
    <Router>
      
      <Header data={userdata} onLogout={onLogout}/>
      <Switch>
      <Route path='/dashboard' render={() => <HomePage data={userdata} />} exact />
      <Route path='/about' render={() => <AboutPage />} />
      <Route path='/form' render={() => <SendForm />} />
      <Route path='/gallery' render={() => <GalleryPage />} />
      {userdata && userdata.role === 'admin' ? <Route path='/users' render={() => <UsersPage data={userdata} />  }  /> : <Redirect to="/about" /> }
      <Route path='/users' render={() => <UsersPage data={userdata} />} />
      <Redirect to='/about' />
      </Switch>
    </Router>
  )
};

export default BaseContainer;