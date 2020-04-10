import React, {Component} from 'react';
import Switch from 'react-switch';
import axiosData from '../../../service/axiosData'

export default class SwitchActivate extends Component {

  constructor(props) {
    super(props);
    this.toggleActivate = this.toggleActivate.bind(this);

    this.state = {
      checked: props.isActivated
    }

  }

  toggleActivate(checked) {
    this.setState({ checked });
  }

  componentDidUpdate() {
    const {id} = this.props;
    axiosData.patch(`/users/${id}.json`, {isActivated : this.state.checked});  
  }


  render() {

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