import React, { Component } from 'react';
import axiosData from '../../../service/axiosData';

import UserListItem from './user-list-item'

export default class UsersFetch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    this.updateUsers();
  }

  updateUsers = () => {
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

  onDeleteUser = (id) => {
    delete this.state.users[id];
    this.updateUsers();
  }

    render() {
      return (
        <React.Fragment>
          {this.state.users.map(user => 
          
          <UserListItem
            key={user.id}
            id={user.id}
            userName={user.userName}
            surName={user.surName}
            email={user.email}
            password={user.password}
            phone={user.phone}
            role={user.role}
            birthday={user.birthday}
            isActivated={user.isActivated}
            onDeleteUser={this.onDeleteUser.bind(this)}
           />
          )}
        </React.Fragment>
    );
  }
};