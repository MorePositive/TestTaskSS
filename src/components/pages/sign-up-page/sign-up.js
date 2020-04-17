import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DatePicker from "react-datepicker";
import axiosData from '../../../service/axiosData';

import "react-datepicker/dist/react-datepicker.css";
import './sign-up.css'

const initialState = {
	userName: '',
	surName: '',
	email: '',
	phone: '',
	password: '',
	passwordConfirm: '',
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
		passwordConfirmError: '',
		passwordConfirmClazz: 'form-control',
		roleError: '',
		birthdayError: '',
		birthdayClazz: 'form-control'
	},
	passwordShown: false,
	confirmShown: false
}

export default class SignUpPage extends Component {

	constructor(props) {
		super(props)
		this.refreshApp = props.refreshApp;
		
		this.state = initialState;
	}
	getInitialState = () => {
		this.setState(initialState)
	}

	postUsersDataHandler = (e) => {
		const { userName, surName, email, phone, password, role, birthday, isActivated, passwordConfirm } = this.state;
		e.preventDefault();
		const isValid = this.validate();
		const confirmed = passwordConfirm === password;

		if (isValid && confirmed) {
			const usersData = {
				userName,
				surName,
				email,
				phone,
				password,
				role,
				birthday,
				isActivated
			}
			axiosData.post('/users.json', usersData)
				.then(res => {
					this.refreshApp();
					alert('Спасибо за регистрацию! Подождите пока администратор активирует Ваш аккаунт');
					this.getInitialState();
				})
				.catch(err => console.log(err))
		}		
	}

	validate = () => {
		const { role, userName, surName, email, password, passwordConfirm, birthday } = this.state;
		let roleError = '';
		let userNameError = '';
		let surNameError = '';
		let emailError = '';
		let passwordError = '';
		let passwordConfirmError = '';
		let birthdayError = '';
		let userNameClazz = 'form-control';
		let surNameClazz = 'form-control';
		let emailClazz = 'form-control';
		let passwordClazz = 'form-control';
		let passwordConfirmClazz = 'form-control';
		let birthdayClazz = 'form-control';


		if (!role) {
			roleError = "Please choose your role";
		}

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

		if (!passwordConfirm) {
			passwordConfirmError = "confirm your password";
			passwordConfirmClazz += " is-invalid";
		} else if (passwordConfirm !== password) {
			passwordConfirmError = "incorrect password";
			passwordConfirmClazz += " is-invalid";
		}

		if (!birthday) {
			birthdayError = "birthday field is empty";
			birthdayClazz += " is-invalid";
		}

		if (roleError || userNameError || surNameError || emailError || passwordError || passwordConfirmError || birthdayError) {
			this.setState({
				inputValidError: {
					roleError, 
					userNameError, 
					userNameClazz, 
					surNameError,
					surNameClazz, 
					emailError,
					emailClazz, 
					passwordError,
					passwordClazz,
					passwordConfirmError,
					passwordConfirmClazz,
					birthdayError,
					birthdayClazz 
				} 
			})
			return false
		}
		return true
	}

	togglePasswordVisibility = () => {
		const {passwordShown} = this.state;
		this.setState({
			passwordShown: !passwordShown,
		})
	}
	togglePasswordConfirmVisibility = () => {
		const {confirmShown} = this.state;
		this.setState({
			confirmShown: !confirmShown
		})
	}

	handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

	render() {

		const { passwordShown, confirmShown } = this.state;
		const { password, passwordConfirm } = this.state;

		const hideIcon = password ? "fa fa-eye password-icon" : "";
		const hideIconConfirm = passwordConfirm ? "fa fa-eye password-icon" : "";
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
						<input type="radio" className="form-control" name="role" value="admin" onChange={this.handleChange} />
						<label htmlFor="admin">admin</label>
					</div>
					<div className="form-wrapper">
						<input type="radio" className="form-control" name="role" value="manager" onChange={this.handleChange} />
						<label htmlFor="manager">manager</label>
					</div>
					<div className="form-wrapper">
						<input type="radio" className="form-control" name="role" value="marketer" onChange={this.handleChange} />
						<label htmlFor="marketer">marketer</label>
					</div>
				</div>
				<div style={errorStyle}>{this.state.inputValidError.roleError}</div>
				<div className="form-group d-flex justify-content-sm-between">
					<div className="form-wrapper">
						<label htmlFor="role">Username<span className="required">*</span></label>
						<input type="text" className={this.state.inputValidError.userNameClazz} name="userName" value={this.state.userName} onChange={this.handleChange} />
						<div style={errorStyle} className="">{this.state.inputValidError.userNameError}</div>
					</div>
					<div className="form-wrapper">
						<label htmlFor="lastname">Surname<span className="required">*</span></label>
						<input type="text" className={this.state.inputValidError.surNameClazz} name="surName" value={this.state.surName} onChange={this.handleChange} />
						<div style={errorStyle}  className="">{this.state.inputValidError.surNameError}</div>
					</div>
				</div>
				<div className="form-wrapper">
					<label htmlFor="email">Email address<span className="required">*</span></label>
					<input type="email" className={this.state.inputValidError.emailClazz} name="email" value={this.state.email} onChange={this.handleChange} />
					<div style={errorStyle}  className="">{this.state.inputValidError.emailError}</div>
				</div>
				<div className="form-group d-flex justify-content-sm-between">
				<div className="form-wrapper">
					<div className="form-group password-container">
					<label htmlFor="password">Password<span className="required">*</span></label>
					<input type={passwordShown ? "text" : "password"} className={this.state.inputValidError.passwordClazz} name="password" value={this.state.password} onChange={this.handleChange} />
					<i className={hideIcon} onClick={this.togglePasswordVisibility}></i>
					</div>
					<div style={errorStyle} className="">{this.state.inputValidError.passwordError}</div>
				</div>
				<div className="form-wrapper">
					<div className="form-group password-container">
					<label htmlFor="passwordConfirm">Password Confirm<span className="required">*</span></label>
					<input type={confirmShown ? "text" : "password"} className={this.state.inputValidError.passwordConfirmClazz} name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.handleChange} />
					<i className={hideIconConfirm} onClick={this.togglePasswordConfirmVisibility}></i>
					</div>
					<div style={errorStyle} className="">{this.state.inputValidError.passwordConfirmError}</div>
				</div>
				</div>
				<div className="form-group d-flex justify-content-sm-between">
				<div className="form-wrapper">
					<label htmlFor="phone">Phone</label>
					<input type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange} />
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
				</div>
				<button className="btn btn-primary btn-block" >Create new</button>
				<Link to="/login" className="btn btn-primary btn-block" >Exit</Link>
			</form>
		</div>
    );
	}
}