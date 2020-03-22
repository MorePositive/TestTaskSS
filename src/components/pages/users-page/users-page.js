import React, { Component } from 'react';
import Table from 'react-bootstrap/table';
import UsersFetch from './usersFetch';


export default class UsersPage extends Component {

  

  render() {

    const { data } = this.props;
    const { key, userName, surName, email, phone} = this.props;

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

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.11.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyBEbOCxbWlpI4BM3qX9kMBvr9D6nZmZQ9w",
//     authDomain: "testtask-ba53d.firebaseapp.com",
//     databaseURL: "https://testtask-ba53d.firebaseio.com",
//     projectId: "testtask-ba53d",
//     storageBucket: "testtask-ba53d.appspot.com",
//     messagingSenderId: "587457923432",
//     appId: "1:587457923432:web:e119ee33e04fa2e59caedd"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>