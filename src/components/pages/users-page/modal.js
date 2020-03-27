import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import axiosData from '../../../service/axiosData'

export default class UserModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isActivated: false
    }
  }

  postUserActivate = (e) => {
		e.preventDefault();
    const usersData = {
			userName: this.props.username,
			surName: this.props.surname,
			email: this.props.email,
			phone: this.props.phone,
			password: this.props.password,
			role: this.props.role,
			isActivated: true
		}
		axiosData.put(`/users/${this.props.id}.json`, usersData)
			.then(res => {
				alert('пользователь активирован');
			})
			.catch(err => console.log(err))
	}

  postUserDelete = (e) => {
    e.preventDefault();
    axiosData.delete(`/users/${this.props.id}.json`)
      .then(res => {
        alert('пользователь удален');
      })
      .catch(err => console.log(err))
  }


  render() {

    const { username, surname, email, phone } = this.props;

    const styles = {
      width: '100%'
    }

    return(
      <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Edit User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container d-flex" >
          <form className="w-75">
            <div className="form-group d-flex">
              <div className="form-wrapper mr-3" style={styles}>
                <label htmlFor="role">Name</label>
                <input type="text" className="form-control" name="name" defaultValue={username} />
              </div>
              <div className="form-wrapper mr-3" style={styles}>
                <label htmlFor="lastname">Surname</label>
                <input type="text" className="form-control" name="lastname" defaultValue={surname} />
              </div>
            </div>
            <div className="form-group d-flex">
              <div className="form-wrapper mr-3" style={styles}>
                <label htmlFor="phone">Phone</label>
                <input type="text" className="form-control" name="phone" defaultValue={phone} />
              </div>
              <div className="form-wrapper mr-3" style={styles}>
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" name="email" defaultValue={email} />
              </div>
            </div>
          </form>
          <div className="d-flex w-25 justify-content-center align-items-center"><span>Image here</span></div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.postUserActivate} className="btn btn-outline-success w-50">Activate</button>
        <button onClick={this.postUserDelete} className="btn btn-outline-danger w-50">Delete</button>
        <button onClick={this.props.onHide} className="btn btn-outline-secondary w-50">Close</button>
      </Modal.Footer>
    </Modal>
    )
  }
}