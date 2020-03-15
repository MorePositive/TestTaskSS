import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axiosData from '../../../service/axiosData';

import './sign-up.css'

export default class SignUpPage extends Component {

	state = {
		userName: '',
		surName: '',
		email: '',
		phone: '',
		password: ''
	}

	postUsersDataHandler = (e) => {
		e.preventDefault();
		const usersData = {
			userName: this.state.userName,
			surName: this.state.surName,
			email: this.state.email,
			phone: this.state.phone,
			password: this.state.password
		}

		axiosData.post('/users.json', usersData)
			.then(res => console.log(res))
			.catch(err => console.log(err))
	}
	
	render() {
		return (
      <div className="login-container signup-wh">			
       <form className="sign-up-form" onSubmit={this.postUsersDataHandler} >
			 	<h2>Add new user</h2>
        <p>Select registration type:</p>
				<div className="form-group d-flex justify-content-sm-between">
					<div className="form-wrapper">
						<label htmlFor="name">Username</label>
						<input type="text" className="form-control" name="name" value={this.state.userName} onChange={(e) => this.setState({userName: e.target.value})} />
					</div>
					<div className="form-wrapper">
						<label htmlFor="lastname">Surname</label>
						<input type="text" className="form-control" name="lastname" value={this.state.surName} onChange={(e) => this.setState({surName: e.target.value})} />
					</div>
				</div>
				<div className="form-wrapper mb-3">
					<label htmlFor="email">Email address</label>
					<input type="email" className="form-control" name="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
				</div>
				<div className="form-group d-flex justify-content-sm-between">
				<div className="form-wrapper">
					<label htmlFor="phone">Phone</label>
					<input type="text" className="form-control" name="phone" value={this.state.phone} onChange={(e) => this.setState({phone: e.target.value})} />
				</div>
				<div className="form-wrapper">
					<label htmlFor="password">Password</label>
					<input type="password" className="form-control" name="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} />
				</div>
				</div>
				<button className="btn btn-primary btn-block" >Create new</button>
				<Link to="/login" className="btn btn-primary btn-block" >Exit</Link>
			</form>
		</div>
    );
	}
};