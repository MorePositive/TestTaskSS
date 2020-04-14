import React, {Component} from 'react';
import axiosData from '../../../service/axiosData'

export default class VehicleEditPage extends Component {

  constructor(props) {
    super(props)
    console.log(this.props)

    this.state = {
      SelectedUser: {}
    }
  }  

  componentDidMount() {
    axiosData.get(`/users/${this.props.itemId}.json`)
    .then(res => {
      const SelectedUser = Object.assign({}, res.data);
      console.log(SelectedUser);
      this.setState({
        SelectedUser
      })
    })
    .catch(err => console.log(err));
  }

  render() {

    return (
      <div>
        <h1>{this.props.itemId}</h1>
        <h2>{this.state.SelectedUser.userName}</h2>
        <h2>{this.state.SelectedUser.surName}</h2>
        <h2>{this.state.SelectedUser.email}</h2>
        <h2>{this.state.SelectedUser.password}</h2>
      </div>
    )
  }
}