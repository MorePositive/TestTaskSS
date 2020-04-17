import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';

import axiosData from '../../../service/axiosData'

const initialState = {
  users: [],
  mark: '',
  model: '',
  year: '',
  owner: 'admin',
  yearError: ''
}

export default class AddVehicle extends Component {

  constructor() {
    super();

    this.state = initialState;
  }

	getInitialState = () => {
		this.setState(initialState)
  }

  componentDidMount() {
    axiosData.get('/users.json')
    .then(res => {
    const fetchedUsers = [];
    for (let key in res.data) {
      fetchedUsers.push({
        ...res.data[key],
        id: key
      })
    }
    this.setState({
      users: fetchedUsers
    })
    this.forceUpdate();
  })
  .catch(err => console.log(err)); 
  }

  // componentDidUpdate() {
  //   axiosData.get('/users.json')
  //   .then(res => {
  //   const fetchedUsers = [];
  //   for (let key in res.data) {
  //     fetchedUsers.push({
  //       ...res.data[key],
  //       id: key
  //     })
  //   }
  //   this.setState({
  //     users: fetchedUsers
  //   })
  //   this.forceUpdate();
  // })
  // .catch(err => console.log(err)); 
  // }
  
  postVehicleAdd = (e) => {
    e.preventDefault();
    const { mark, model, year, owner } = this.state;
    const validDate = this.validateDate();
    if (validDate) {
    const vehicleData = { mark, model, year, owner }
    axiosData.post('/vehicles.json', vehicleData)
    .then(res => {
      this.setState({
        mark: '',
        model: '',
        year: '',
        owner: 'admin',
        yearError: ''
      })
      alert('Автомобиль добавлен');
      this.forceUpdate()
    })
    .catch(err => console.log(err))
    }
  }		

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

  validateDate = () => {
    const { year } = this.state;
    let yearError = '';
    const currentYear = new Date().getFullYear();
    if (year < 1900 || year > currentYear) {
      yearError = 'invalid input'
    }
    if (yearError) {
      this.setState({ yearError });
      return false
    }
    return true
  }

  render() {

    const { users, mark, model, year, owner, yearError } = this.state;

    const optionsItem = users.map( user => {
      const itemKey = user.id;
      const itemName = user.userName || user.email;
      return (
      <option key={itemKey} value={itemName}>{itemName}</option>
      )
    })

    return (
      <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Add Vehicle
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container" >
          <form className="w-100" onSubmit={this.postVehicleAdd}>
          <div className="form-wrapper d-flex mr-3">
            <div className="form-group w-75">
              <div className="form-wrapper mr-3">
                <label htmlFor="mark">Mark</label>
                <input type="text" className="form-control" name="mark" value={mark} onChange={this.handleChange} required/>
              </div>
              <div className="form-wrapper mr-3">
                <label htmlFor="model">Model</label>
                <input type="text" className="form-control" name="model" value={model} onChange={this.handleChange} required/>
              </div>
              <div className="form-wrapper mr-3">
                <label htmlFor="year">Year</label>
                <input type="number" className="form-control" name="year" value={year} onChange={this.handleChange} required/>
                <small style={{color: "red", fontSize: 10}}>{yearError}</small>
              </div>
              <div className="form-wrapper mr-3">
                <label htmlFor="owner">Choose vehicle's owner</label>
                <select name="owner" value={owner} className="custom-select" onChange={this.handleChange} required>
                  {optionsItem}
                </select>
              </div>
            </div>
              <div className="d-flex w-25 align-items-center">
              <div className="form-group">
                <label htmlFor="image">Upload image</label>
                <input type="file" class="form-control-file" id="image"/>
              </div>
              </div>
            </div>
            <div className="d-flex mt-4">
              <button className="btn btn-success w-25 mr-3">Add Vehicle</button>
              <button onClick={this.props.onHide} className="btn btn-outline-secondary w-25">Close</button>
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
    )
  }
}