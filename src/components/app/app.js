import React, { Component } from 'react';

import Header from '../header/header'
import './app.css';
import AboutPage from '../about-page/about-page';
import SendForm from '../send-form-page/send-form'
import CarouselBox from '../gallery-page/slider'

export default class App extends Component {

  render() {
    return (
      <div>
      <Header />
      <AboutPage />
      <SendForm />
      <CarouselBox />
      </div>
    );
  };
};