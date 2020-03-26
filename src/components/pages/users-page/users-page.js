import React, { Component } from 'react';
import Table from 'react-bootstrap/table';
import UsersFetch from './usersFetch';


export default class UsersPage extends Component {

  render() {
    return (
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Users</th>
              <th>E-mail</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <UsersFetch />
          </tbody>
        </Table>
      </div>
    )
  }
};