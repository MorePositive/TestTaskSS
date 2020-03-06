import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';

import LoginPage from '../login-page/login-page'
import Header from '../header/header'
import AboutPage from '../about-page/about-page';
import SendForm from '../send-form-page/send-form'
import CarouselBox from '../gallery-page/gallery'

export default class App extends Component {

  render() {
    return (
      <Router>
      <div>
      <Header />
      <LoginPage />
      <Route path='/about' component={AboutPage}/>
      <Route path='/form' component={SendForm}/>
      <Route path='/gallery' component={CarouselBox}/>
      </div>
      </Router>
    );
  };
};