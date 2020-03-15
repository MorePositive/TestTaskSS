import React, { Component } from 'react';
import firebase from 'firebase'; 

import './app.css';

import StartPageContainer from '../start-page-container/start-page-container'
import BaseContainer from '../base-container/base-container'

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
      console.log(user)
    });
  }

  onLogin = (e) => {
    e.preventDefault();
    let value = e.target.value;
    console.log(value)
  }

  onLogout = (e) => {
    e.preventDefault()
    this.setState({
      isLoggedIn: false
    });
  }

  render() {

    const { isLoggedIn } = this.state;

    return isLoggedIn ? 
    <BaseContainer data={this.data} firebaseOut={() => this.data.signOut()} /> : 
    <StartPageContainer uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} onLogin={this.onLogin} /> 

  };
};