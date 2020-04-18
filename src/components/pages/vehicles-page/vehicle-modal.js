import React, {Component} from 'react';
import { ButtonToolbar } from 'react-bootstrap';

import AddVehicle from './add-vehicle'

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