import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

import axiosData from '../../../service/axiosData'

import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import '../vehicles-page/vehicles-page.css'



export default class Vehicleslist extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: []
    }

  }

  componentDidMount() {
    console.log('1232')
    this.updateUsers();
  }

  updateUsers = () => {
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


  render() {

    const selectOptions  = this.state.users.reduce((acc, user, index) => {
      acc[user.email] = user.userName || user.email;
      return acc;
    }, {});
 
    const columns = [{
      dataField: 'email',
      text: 'Owner',
      sort: true,
      formatter: cell => selectOptions[cell],
      filter: selectFilter({
        options: selectOptions,
      })
    }, {
      dataField: 'password',
      text: 'Model',
      sort: true,
    }, {
      dataField: 'userName',
      text: 'Year',
      sort: true,
    }, {
      dataField: 'id',
      text: 'Mark',
      sort: true,
    }];

    return ( 
      <div className="container vehicles-page" >
        <h2>Vehicles</h2>
      <BootstrapTable keyField="email" data={this.state.users} columns ={columns} pagination={paginationFactory()} filter={filterFactory()} rowEvents={{onClick: this.props.onItemSelected}} /> 
      </div> 
    )
  }
};