import React, {Component} from 'react';
import { ButtonToolbar } from 'react-bootstrap';

import AddVehicle from './add-vehicle'
import axiosData from '../../../service/axiosData'

export default class VehicleModal extends Component {
  constructor() {
    super();
    this.addModalClose = this.addModalClose.bind(this);
    this.addModalOpen = this.addModalOpen.bind(this);

    this.state = {
      addModalShow: false
    }
  }

  addModalClose() {
    this.setState({ addModalShow: false })
  }

  addModalOpen() {
    this.setState({ addModalShow: true })
  }

  // postUserDelete = (e) => {
  //   const {id, onDeleteUser} = this.props;
  //   e.preventDefault();
  //   axiosData.delete(`/users/${id}.json`)
  //     .then(res => {
  //       onDeleteUser(id)
  //       alert('пользователь удален');
  //     })
  //     .catch(err => console.log(err))
  // }

  render() {

    return (
      <ButtonToolbar
      className="justify-content-center"
      >
        <button
        onClick={this.addModalOpen}
        className="btn btn-outline-success"
        >
          Add New Vehicle
        </button>
        <AddVehicle
        show={this.state.addModalShow}
        onHide={this.addModalClose}
        />
      </ButtonToolbar>
    )
  }
}