import React, {Component} from 'react';
import UserModal from './modal'
import { ButtonToolbar, Button } from 'react-bootstrap';

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

    const {id, userName, surName, email, password, phone, role} = this.props;

    return (
          <tr>
              <td>{userName} {surName}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{role}</td>
              <td>
                <ButtonToolbar>
                  <Button
                  onClick={this.addModalOpen}
                  >
                    edit
                  </Button>
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