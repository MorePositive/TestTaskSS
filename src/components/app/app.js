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
  }


  refreshApp() {
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
      })
      
      .catch(err => console.log(err)); 
  }

  componentDidMount = () => {
    this.data.onAuthStateChanged( user => {
      this.setState({
        isLoggedIn: !!user,
        currentUser: user
      })
      // console.log(user)
      // Cookies.set('isLoggedIn', true, {expires: 365});
      // Cookies.set('currentUser', user);
    });
    this.refreshApp();
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
        Cookies.set('currentUser', user);
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
    this.data.signOut();
    Cookies.remove('isLoggedIn');
    Cookies.remove('currentUser');
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

    // const { isLoggedIn } = this.state;

    const isLogIn = Cookies.get('isLoggedIn');
    const userdata = Cookies.get('currentUser');
    // let usrPasre = JSON.stringify(Cookies.get('currentUser'));
    // isLogIn && usr
    const LoggedIn = isLogIn && userdata;

    return LoggedIn ? 
    <BaseContainer socialData={this.state} onLogout={this.onLogout.bind(this)} /> : 
    <StartPageContainer onSubmit={this.onLogin.bind(this)} uiConfig={this.uiConfig} refreshApp={this.refreshApp.bind(this)} firebaseAuth={this.data} resetForm={this.resetForm} /> 
  };
};