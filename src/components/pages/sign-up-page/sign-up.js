import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DatePicker from "react-datepicker";
import axiosData from '../../../service/axiosData';

import "react-datepicker/dist/react-datepicker.css";
import './sign-up.css'

export default class SignUpPage extends Component {

	constructor(props) {
		super(props)
		this.refreshApp = props.refreshApp;
		this.resetForm = props.resetForm.bind(this);
		
		this.state = {
			userName: '',
			surName: '',
			email: '',
			phone: '',
			password: '',
			role: '',
			birthday: '',
			isActivated: false,
			inputValidError: {
				userNameError: '',
				userNameClazz: 'form-control',
				surNameError: '',
				surNameClazz: 'form-control',
				emailError: '',
				emailClazz: 'form-control',
				passwordError: '',
				passwordClazz: 'form-control',
				roleError: '',
				roleClazz: 'form-control',
				birthdayError: '',
				birthdayClazz: 'form-control'
			},
			passwordShown: false
		}
	}

	postUsersDataHandler = (e) => {
		e.preventDefault();
		const isValid = this.validate();
		if (!isValid) {
			console.log('empty!')
		} else {
			const usersData = {
				userName: this.state.userName,
				surName: this.state.surName,
				email: this.state.email,
				phone: this.state.phone,
				password: this.state.password,
				role: this.state.role,
				birthday: this.state.birthday,
				isActivated: this.state.isActivated
			}
			console.log(usersData.userName)
			axiosData.post('/users.json', usersData)
				.then(res => {
					this.refreshApp();
					alert('Спасибо за регистрацию! Подождите пока администратор активирует Ваш аккаунт');
					this.resetForm();
				})
				.catch(err => console.log(err))
		}		
	}

	validate = () => {
		const { userName, surName, email, password, birthday } = this.state;
		let userNameError = '';
		let surNameError = '';
		let emailError = '';
		let passwordError = '';
		let birthdayError = '';
		let userNameClazz = 'form-control';
		let surNameClazz = 'form-control';
		let emailClazz = 'form-control';
		let passwordClazz = 'form-control';
		let birthdayClazz = 'form-control';


		if (!userName) {
		userNameError = "name is empty";
		userNameClazz = "form-control is-invalid";
		} 

		if (!surName) {
			surNameError = "surname is empty";
			surNameClazz += " is-invalid";
		}

		if (!email) {
			emailError = "email field is empty";
			emailClazz += " is-invalid"
		}
		if (!password) {
			passwordError = "password field is empty";
			passwordClazz += " is-invalid";
		}
		if (!birthday) {
			birthdayError = "birthday field is empty";
			birthdayClazz += " is-invalid";
		}
		if (userNameError || surNameError || emailError || passwordError || birthdayError) {
			this.setState({
				inputValidError: { 
					userNameError, 
					userNameClazz, 
					surNameError,
					surNameClazz, 
					emailError,
					emailClazz, 
					passwordError,
					passwordClazz, 
					birthdayError,
					birthdayClazz 
				} 
			})
			return false;
		}
		return true
	}

	togglePasswordVisibility = () => {
		const {passwordShown} = this.state;
		this.setState({
			passwordShown: !passwordShown
		})
	}


	render() {

		const { passwordShown } = this.state;
		const { password } = this.state;

		const hideIcon = password ? "fa fa-eye password-icon" : "";
		const errorStyle = {
			fontSize: 12,
			color: 'red'
		}

		return (
      <div className="login-container signup-wh">			
       <form className="sign-up-form" onSubmit={this.postUsersDataHandler} >
			 	<h2>Add new user</h2>
        <p>Select registration type:<span className="required">*</span></p>
				<div className="form-group d-flex justify-content-sm-between">
					<div className="form-wrapper">
						<input type="radio" className="form-control" name="type" value="admin" onChange={(e) => this.setState({role: e.target.value})} />
						<label htmlFor="admin">admin</label>
					</div>
					<div className="form-wrapper">
						<input type="radio" className="form-control" name="type" value="manager" onChange={(e) => this.setState({role: e.target.value})} />
						<label htmlFor="manager">manager</label>
					</div>
					<div className="form-wrapper">
						<input type="radio" className="form-control" name="type" value="marketer" onChange={(e) => this.setState({role: e.target.value})} />
						<label htmlFor="marketer">marketer</label>
					</div>
				</div>
				<div className="form-group d-flex justify-content-sm-between">
					<div className="form-wrapper">
						<label htmlFor="role">Username<span className="required">*</span></label>
						<input type="text" className={this.state.inputValidError.userNameClazz} name="name" value={this.state.userName} onChange={(e) => this.setState({userName: e.target.value})} />
						<div style={errorStyle} className="">{this.state.inputValidError.userNameError}</div>
					</div>
					<div className="form-wrapper">
						<label htmlFor="lastname">Surname<span className="required">*</span></label>
						<input type="text" className={this.state.inputValidError.surNameClazz} name="lastname" value={this.state.surName} onChange={(e) => this.setState({surName: e.target.value})} />
						<div style={errorStyle}  className="">{this.state.inputValidError.surNameError}</div>
					</div>
				</div>
				<div className="form-wrapper">
					<label htmlFor="email">Email address<span className="required">*</span></label>
					<input type="email" className={this.state.inputValidError.emailClazz} name="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
					<div style={errorStyle}  className="">{this.state.inputValidError.emailError}</div>
				</div>
				<div className="form-group d-flex justify-content-sm-between">
				<div className="form-wrapper">
					<label htmlFor="phone">Phone</label>
					<input type="text" className="form-control" name="phone" value={this.state.phone} onChange={(e) => this.setState({phone: e.target.value})} />
				</div>
				<div className="form-wrapper">
					<label htmlFor="password">Password<span className="required">*</span></label>
					<div className="form-group password-container">
					<input type={passwordShown ? "text" : "password"} className={this.state.inputValidError.passwordClazz} name="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} />
					<i className={hideIcon} onClick={this.togglePasswordVisibility}></i>
					</div>
					<div style={errorStyle} className="">{this.state.inputValidError.passwordError}</div>
				</div>
				</div>
				<div className="form-wrapper mb-3 d-flex flex-column">
				<label>Birthday<span className="required">*</span></label>
				<DatePicker
				className={this.state.inputValidError.birthdayClazz}
				selected={this.state.birthday}
        onChange={(date) => this.setState({birthday: date})}
				/>
				<div style={errorStyle}  className="">{this.state.inputValidError.birthdayError}</div>
				</div>
				<button className="btn btn-primary btn-block" >Create new</button>
				<Link to="/login" className="btn btn-primary btn-block" >Exit</Link>
			</form>
		</div>
    );
	}
};