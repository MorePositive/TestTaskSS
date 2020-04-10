import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';

export default class UserModal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isActivated: false
    }
  }

  render() {

    const { username, surname, email, phone } = this.props;

    const styles = {
      width: '100%'
    }

    return (
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
        <button onClick={this.props.onHide} className="btn btn-outline-secondary w-100">Close</button>
      </Modal.Footer>
    </Modal>
    )
  }
}