import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from '../header/header'
import HomePage from '../pages/home-page/home-page'
import AboutPage from '../pages/about-page/about-page';
import SendForm from '../pages/send-form-page/send-form'
import GalleryPage from '../pages/gallery-page/gallery-page'
import UsersPage from '../pages/users-page/users-page'
import VehiclesPage from '../pages/vehicles-page/vehicles-page'
import VehicleEditPage from '../pages/vehicles-page/vehicle-edit-page'
import PrivateRoute from '../app/private-route'


const BaseContainer = ({ userdata, onLogout }) => {


  return (
    <Router>
      <Header data={userdata} onLogout={onLogout}/>
      <Switch>
      <Route path='/dashboard' render={() => <HomePage data={userdata} />} />
      <Route path='/about' render={() => <AboutPage />} />
      <Route path='/form' render={() => <SendForm />} />
      <Route path='/gallery' render={() => <GalleryPage />} />
       <PrivateRoute path="/vehicles" roles="admin, manager" component={VehiclesPage} />
       <PrivateRoute path="/users" roles="admin" component={UsersPage} />
      <Route path='/vehicles/edit/:id' 
        render={({match}) => {
          const { id } = match.params;
          return <VehicleEditPage itemId={id} />
        }} 
      />
      <Redirect to='/about' />
      </Switch>
    </Router>
  )
};

export default BaseContainer;