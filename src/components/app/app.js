import React, { Component } from 'react';
import firebase from 'firebase'; 
import fire from '../../service/fire'
import axiosData from '../../service/axiosData'

import './app.css';

import StartPageContainer from '../start-page-container/start-page-container'
import BaseContainer from '../base-container/base-container'


export default class App extends Component {

  data = firebase.auth();

  state = {
    isLoggedIn: false,
    currentUser: null
  }

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
  }


  refreshApp() {
    axiosData.get('/users.json')
      .then(res => {
        console.log(res.data);
        const fetchedUsers = [];
        for (let key in res.data) {
          fetchedUsers.push({
            ...res.data[key],
            id: key
          })
        }
        this.setState({
          users: fetchedUsers
        })
        console.log(fetchedUsers[0].email)
      })
      
      .catch(err => console.log(err)); 
  }

  componentDidMount = () => {
    this.data.onAuthStateChanged( user => {
      this.setState({
        isLoggedIn: !!user,
        currentUser: user
      })
      document.cookie = 'isLoggedIn=' + !!user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      console.log(user)
    });
    this.refreshApp()
  }

  onLogin(e, email, password) {
    console.log(123, this, e)
    e.preventDefault();
    for ( let user of this.state.users  ) {
      if (email === user.email && password === user.password && user.isActivated) {
        this.setState({
          isLoggedIn: true,
          currentUser: user
        })
        return;
      }
    } 
    alert('wrong USEEERRRR || not activated')
    // fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    //   .catch(err => console.log(err));
  }
  // onLogin = (e) => {
  //   e.preventDefault();
  //   let value = e.target.value;
  //   console.log(value)
  // }

  onLogout = (e) => {
    e.preventDefault()
    this.setState({
      isLoggedIn: false,
      currentUser: null
    });
    this.data.signOut();
  }

  render() {

    const { isLoggedIn } = this.state;

    return isLoggedIn ? 
    <BaseContainer data={this.state} onLogout={this.onLogout.bind(this)} /> : 
    <StartPageContainer onSubmit={this.onLogin.bind(this)} uiConfig={this.uiConfig} refreshApp={this.refreshApp.bind(this)} firebaseAuth={this.data} /> 

  };
};