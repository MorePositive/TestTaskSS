import React, {Component} from 'react';
import axiosData from '../../../service/axiosData';
import {storage} from '../../../service/fire'

export default class VehicleEditPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      owner: '',
      mark: '',
      model: '',
      year: '',
      url: '',
      loading: true,
      progress: 0
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
        url: selectedVehicle.url,
        loading: false
      })
    })
    .catch(err => console.log(err));
  }

  onVehicleEdit = (e) => {
    const { owner, mark, model, year, url } = this.state;
    const newVehicle = { owner, mark, model, year, url }
    e.preventDefault();
    axiosData.patch(`/vehicles/${this.props.itemId}.json`, newVehicle)
      .then(res => {
        this.setState({ progress: 0 })
        alert('data was changed')
      })
      .catch(err => console.log(err))
  }

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value })
  }

    // Upload image

  handleUpload = (e) => {
    const image = e.target.files[0];
    if (image) {
      this.setState(() => ({ image }))
    }
  }
  
  onUpload = (e) => {
    e.preventDefault();
    const { image } = this.state;
    if (!image) {
      return false
    } else {
      const upload = storage.ref(`images/${image.name}`).put(image);
      upload.on('state_changed', 
      (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      this.setState({ progress })
      }, 
      (err) => {
        console.log(err)
      }, 
      () => {
        storage.ref('images').child(image.name).getDownloadURL()
          .then(url => {
            this.setState({ url })
          })
      })
    }
  }

  render() {

    const { owner, mark, model, year, loading, progress } = this.state;

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
        <div className="form-group mb-3">
          <label htmlFor="year">Year:</label>
          <input type="text" className="form-control" name="year" defaultValue={year} onChange={this.handleChange} required/>
        </div>
        <div className="form-wrapper d-flex flex-column">
          <progress className="progress-bar mb-3 w-50" value={progress} max="100" />
          <input type="file" className="form-control-file mb-3 w-50" id="image" onChange={this.handleUpload} />
          <button onClick={this.onUpload} className="btn btn-success mb-3 w-50">Upload</button>
          <img src={this.state.url || 'https://previews.123rf.com/images/archman/archman1510/archman151002572/45807161-flat-long-shadow-car-icon-vector-illustration.jpg'} alt="vehicle" width="200" height="150" />
        </div>
        <button type="submit" className="btn btn-primary mt-3 w-50">Edit</button>
      </form>
       }
      </div>
    )
  }
}