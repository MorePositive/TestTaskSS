import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';

import LoginPage from '../login-page/login-page'
import Header from '../header/header'
import HomePage from '../home-page/home-page'
import AboutPage from '../about-page/about-page';
import SendForm from '../send-form-page/send-form'
import GalleryPage from '../gallery-page/gallery-page'

export default class App extends Component {

  state = {
    isLoggedIn: false
  }

  onLogin = (e) => {
    e.preventDefault()
    this.setState({
      isLoggedIn: true
    });
    console.log(this.state.isLoggedIn)
  };

  onLogout = (e) => {
    e.preventDefault()
    this.setState({
      isLoggedIn: false
    });
    console.log(this.state.isLoggedIn)
  }

  render() {

    const { isLoggedIn } = this.state;

      return (
        <Router>
          <div className="app">
            <Route path='/login'
              render={() => <LoginPage onLogin={this.onLogin} isLoggedIn={isLoggedIn}/>} />
            <Header onLogout={this.onLogout} />
            <Route path='/' render={() => <HomePage isLoggedIn={isLoggedIn}/>} exact />
            <Route path='/about' render={() => <AboutPage isLoggedIn={isLoggedIn}/>} />
            <Route path='/form' render={() => <SendForm isLoggedIn={isLoggedIn}/>} />
            <Route path='/gallery' render={() => <GalleryPage isLoggedIn={isLoggedIn}/>} />
          </div>
        </Router>
      );
  };
};