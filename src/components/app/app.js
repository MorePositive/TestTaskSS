import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase from 'firebase'; 

import './app.css';

import LoginPage from '../login-page/login-page'
import Header from '../header/header'
import HomePage from '../home-page/home-page'
import AboutPage from '../about-page/about-page';
import SendForm from '../send-form-page/send-form'
import GalleryPage from '../gallery-page/gallery-page'

firebase.initializeApp({
  apiKey: "AIzaSyBEbOCxbWlpI4BM3qX9kMBvr9D6nZmZQ9w",
  authDomain: "testtask-ba53d.firebaseapp.com"
})
export default class App extends Component {

  data = firebase.auth();

  state = {
    isLoggedIn: false
  }

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
  }

  componentDidMount = () => {
    this.data.onAuthStateChanged( user => {
      this.setState({
        isLoggedIn: !!user
      })
    });
  }

  onLogout = (e) => {
    e.preventDefault()
    this.setState({
      isLoggedIn: false
    });
  }

  render() {

    const { isLoggedIn } = this.state;

      return (
        <Router>
          <div className="app">
            <Header isLoggedIn={isLoggedIn} data={this.data} firebaseOut={() => this.data.signOut()}/>
            <Route path='/login'
              render={() => <LoginPage isLoggedIn={isLoggedIn} uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>}/>
            <Route path='/' render={() => <HomePage isLoggedIn={isLoggedIn} data={this.data}/>} exact />
            <Route path='/about' render={() => <AboutPage isLoggedIn={isLoggedIn}/>} />
            <Route path='/form' render={() => <SendForm isLoggedIn={isLoggedIn}/>} />
            <Route path='/gallery' render={() => <GalleryPage isLoggedIn={isLoggedIn}/>} />
          </div>
        </Router>
      );
  };
};