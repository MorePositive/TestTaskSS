import React, {Component} from 'react';
import Switch from 'react-switch';
import axiosData from '../../../service/axiosData'

export default class SwitchActivate extends Component {

  constructor(props) {
    super(props);
    this.toggleActivate = this.toggleActivate.bind(this);

    this.state = {
      checked: false,
      users: []
    }
  }

  toggleActivate(checked) {
    this.setState({ checked });
  }

  componentDidMount(checked) {
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
      })
      .catch(err => console.log(err)); 
    if (this.props.isActivated) {
      this.setState({ checked: true })
    }
  }

  componentDidUpdate() {
    const {id, username, surname, email, password, phone, role} = this.props;
    if (this.state.checked) {
      const userDataActivate = {
        userName: username,
        surName: surname,
        email: email,
        phone: phone,
        password: password,
        role: role,
        isActivated: true
      }
      axiosData.put(`/users/${id}.json`, userDataActivate)
			.then(res => {
        //refresh??
				// alert('пользователь активирован');
			})
			.catch(err => console.log(err))
    } else {
      const userDataDeactivate = {
        userName: username,
        surName: surname,
        email: email,
        phone: phone,
        password: password,
        role: role,
        isActivated: false
      }
      axiosData.put(`/users/${id}.json`, userDataDeactivate)
      .then(res => {
        //refresh??
        // alert('пользователь деактивирован');
      })
      .catch(err => console.log(err))
    }
    
  }

  render() {

    console.log(this.state.checked)

    return (
      <div>
        <Switch
        onChange={this.toggleActivate}
        checked={this.state.checked}
        />
     </div>
    )
  }
}