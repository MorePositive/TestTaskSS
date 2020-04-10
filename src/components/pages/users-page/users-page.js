import React from 'react';
import Table from 'react-bootstrap/table';
import UsersFetch from './usersFetch';


const UsersPage = () => {

    return (
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Users</th>
              <th>E-mail</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Activate</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <UsersFetch />
          </tbody>
        </Table>
      </div>
    )
  };

  export default UsersPage;