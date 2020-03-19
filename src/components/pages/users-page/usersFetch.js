import React, { Component } from 'react';
import axiosData from '../../../service/axiosData';
import UserListItem from './users-list'
import UsersPage from './users-page'

export default class UsersFetch extends Component {

    state = {
      users: []
    }
    

    componentDidMount() {
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
        })
        .catch(err => console.log(err)); 
    }

    render() {
      return (
        <React.Fragment>
          {this.state.users.map(user => 
           <UserListItem
           key={user.key}
           userName={user.userName}
           surName={user.surName}
           email={user.email}
           phone={user.phone}
           role={user.role}
           />
          )}
        </React.Fragment>
    );
  }
};