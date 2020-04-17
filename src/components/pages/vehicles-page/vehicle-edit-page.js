import React, {Component} from 'react';
import axiosData from '../../../service/axiosData'

export default class VehicleEditPage extends Component {

  constructor(props) {
    super(props)
    console.log(this.props)

    this.state = {
      owner: '',
      mark: '',
      model: '',
      year: '',
      loading: true
    }
  }  

  componentDidMount() {
    axiosData.get(`/vehicles/${this.props.itemId}.json`)
      .then(res => {
      const selectedVehicle = Object.assign({}, res.data);
      this.setState({
        owner : selectedVehicle.owner,
        mark: selectedVehicle.mark,
        model: selectedVehicle.model,
        year: selectedVehicle.year,
        loading: false
      })
    })
    .catch(err => console.log(err));
  }

  onVehicleEdit = (e) => {
    const { owner, mark, model, year } = this.state;
    const newVehicle = { owner, mark, model, year }
    e.preventDefault();
    axiosData.patch(`/vehicles/${this.props.itemId}.json`, newVehicle)
      .then(res => {
        alert('data was changed')
      })
      .catch(err => console.log(err))
  }

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value })
  }

  render() {

    const { owner, mark, model, year, loading } = this.state;

    return (
      <div className="container">
        { loading ? <h2>Loading...</h2> :
        <form className="send-form" onSubmit={this.onVehicleEdit}>
        <div className="form-group">
          <label htmlFor="owner">Owner:</label>
          <input type="text" className="form-control" name="owner" defaultValue={owner} onChange={this.handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="mark">Mark:</label>
          <input type="text" className="form-control" name="mark" defaultValue={mark} onChange={this.handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="model">Model:</label>
          <input type="text" className="form-control" name="model" defaultValue={model} onChange={this.handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input type="text" className="form-control" name="year" defaultValue={year} onChange={this.handleChange} required/>
        </div>
        <button type="submit" className="btn btn-primary">Edit</button>
      </form>
       }
      </div>
    )
  }
}