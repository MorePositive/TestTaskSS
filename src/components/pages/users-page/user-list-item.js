import React, {Component} from 'react';
import UserModal from './modal'
import { ButtonToolbar } from 'react-bootstrap';
import SwitchActivate from './switch-activate';

export default class UserListItem extends Component {
  constructor(props) {
    super(props);
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

    const {id, userName, surName, email, password, phone, role, birthday, isActivated} = this.props;

    return (
          <tr>
              <td>{userName} {surName}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{role}</td>
              <td>
                <SwitchActivate
                id={id}
                username={userName}
                surname={surName}
                email={email}
                password={password}
                phone={phone}
                role={role}
                isActivated={isActivated}
                birthday={birthday}
                />
              </td>
              <td>
                <ButtonToolbar
                className="justify-content-center"
                >
                  <button
                  onClick={this.addModalOpen}
                  className="btn btn-outline-secondary"
                  >
                    edit
                  </button>
                  <UserModal
                  show={this.state.addModalShow}
                  onHide={this.addModalClose}
                  id={id}
                  username={userName}
                  surname={surName}
                  email={email}
                  password={password}
                  phone={phone}
                  role={role}
                  />
                </ButtonToolbar>
              </td>
            </tr>
    )
  }
}