import React, { Component } from 'react';
import axiosData from '../../../service/axiosData';
import UsersPage from './users-page'

export default class UsersFetch extends Component {

    state = {
      users: []
    }

    componentDidMount() {
      axiosData.get('/users.json').then(resp => console.log('sadsad')).catch(err => console.log(err))
    }

    render() {
      return (
        <div >
          <UsersPage />
        </div>
    );
  }
};