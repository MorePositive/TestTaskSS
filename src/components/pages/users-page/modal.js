import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';
import axiosData from '../../../service/axiosData'

export default class UserModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isActivated: false
    }
  }

  postUsersActivate = (e) => {
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
    // this.setState({ isActivated: true })
		console.log(usersData.userName, this.props.id)
		axiosData.put(`/users/${this.props.id}.json`, usersData)
			.then(res => {
				alert('пользователь активирован');
			})
			.catch(err => console.log(err))
	}


  render() {

    const { username, surname, email, phone, role, id } = this.props;

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
                <input type="text" className="form-control" name="name" value={username} onChange={() => console.log(id)} />
              </div>
              <div className="form-wrapper mr-3" style={styles}>
                <label htmlFor="lastname">Surname</label>
                <input type="text" className="form-control" name="lastname" value={surname}  />
              </div>
            </div>
            <div className="form-group d-flex">
              <div className="form-wrapper mr-3" style={styles}>
                <label htmlFor="phone">Phone</label>
                <input type="text" className="form-control" name="phone" value={phone} />
              </div>
              <div className="form-wrapper mr-3" style={styles}>
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" name="email" value={email} />
              </div>
            </div>
          </form>
          <div className="d-flex w-25 justify-content-center align-items-center"><span>Image here</span></div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.postUsersActivate} className="btn btn-outline-success w-50">Activate</button>
        <button onClick={this.props.onHide} className="btn btn-outline-danger w-50">Close</button>
      </Modal.Footer>
    </Modal>
    )
  }
}