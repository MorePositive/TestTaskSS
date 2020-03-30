import React, { Component } from 'react';
import firebase from 'firebase';
import Cookies from 'js-cookie'
import axiosData from '../../service/axiosData'
import fire from '../../service/fire'

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
    callbacks: {
      signInSuccess: () => false
      }
    }

  refreshApp(checkUser) {
    axiosData.get('/users.json')
      .then(res => {
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
        if (checkUser) {
          if (Cookies.get('isLoggedIn')) {
            const userEmail = Cookies.get('currentUser');
            for (let i = 0; i < this.state.users.length; i++) {
              if (userEmail === this.state.users[i].email) {
                this.setState({
                  isLoggedIn: true,
                  currentUser: this.state.users[i]
                })
                break;
              }
            }
          }
          else {
            Cookies.remove('isLoggedIn');
            Cookies.remove('currentUser');
          }
        }
      })
      .catch(err => console.log(err)); 
  }

  componentDidMount = () => {
    this.data.onAuthStateChanged( user => {
      if (user) {
        this.setState({
          isLoggedIn: !!user,
          currentUser: user
        })
          Cookies.set('isLoggedIn', true, {expires: 365});
          Cookies.set('currentUser', user.email);
      }
    });
    this.refreshApp(true);
  }

  onLogin(e, email, password) {
    e.preventDefault();
    for ( let user of this.state.users  ) {
      if (email === user.email && password === user.password && user.isActivated) {
        this.setState({
          isLoggedIn: true,
          currentUser: user
        })
        Cookies.set('isLoggedIn', true, {expires: 365});
        Cookies.set('currentUser', user.email);
        return;
      }
    } 
    alert('Вы ввели неверные данные или Ваш аккаунт не активирован');
  }

  onLogout = (e) => {
    e.preventDefault()
    this.setState({
      isLoggedIn: false,
      currentUser: null
    });
    Cookies.remove('isLoggedIn');
    Cookies.remove('currentUser');
    this.data.signOut();
  }

  resetForm () {
		this.setState({
			userName: '',
			surName: '',
			email: '',
			phone: '',
			password: '',
			role: '',
		})
	}

  render() {

    const {isLoggedIn} = this.state;

    return isLoggedIn ? 
    <BaseContainer userdata={this.state.currentUser} onLogout={this.onLogout.bind(this)} /> : 
    <StartPageContainer onSubmit={this.onLogin.bind(this)} uiConfig={this.uiConfig} refreshApp={this.refreshApp.bind(this)} firebaseAuth={this.data} resetForm={this.resetForm} /> 
  };
};