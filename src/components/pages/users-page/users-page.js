import React, { Component } from 'react';
import Table from 'react-bootstrap/table'


export default class UsersPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { data } = this.props;

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
            <tr>
              <td>{data.currentUser.displayName}</td>
              <td>{data.currentUser.email}</td>
              <td>{data.currentUser.phoneNumber}</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
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