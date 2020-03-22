import React, { Component } from 'react';
import axiosData from '../../../service/axiosData';
import UserModal from './modal'
import UserListItem from './user-list-item'

export default class UsersFetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }

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
        console.log(fetchedUsers)
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
           id={user.id}
           userName={user.userName}
           surName={user.surName}
           email={user.email}
           password={user.password}
           phone={user.phone}
           role={user.role}
           edit={<UserModal />}
           />
          )}
        </React.Fragment>
    );
  }
};