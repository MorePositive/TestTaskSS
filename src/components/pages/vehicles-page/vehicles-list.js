import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import VehicleModal from './vehicle-modal'

import axiosData from '../../../service/axiosData'

import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import '../vehicles-page/vehicles-page.css'


export default class Vehicleslist extends Component {

  constructor(props) {
    super(props)

    this.state = {
      vehicles: [],
      loading : true
    }
  }

  componentDidMount() {
    this.updateVehicles();
  }

  updateVehicles = () => {
    axiosData.get('/vehicles.json')
    .then(res => {
    const fetchedVehicles = [];
    for (let key in res.data) {
      fetchedVehicles.push({
        ...res.data[key],
        id: key
      })
    }
    this.setState({
      vehicles: fetchedVehicles,
      loading : false
    })
    this.forceUpdate();
  })
  .catch(err => console.log(err)); 
  }


  render() {

    const { loading } = this.state;

    const selectOptions  = this.state.vehicles.reduce((acc, vehicle, index) => {
      acc[vehicle.owner] = vehicle.owner;
      return acc;
    }, {});
 
    const columns = [{
      dataField: 'owner',
      text: 'Owner',
      sort: true,
      formatter: cell => selectOptions[cell],
      filter: selectFilter({
        options: selectOptions,
      })
    }, {
      dataField: 'mark',
      text: 'Mark',
      sort: true,
    }, {
      dataField: 'model',
      text: 'Model',
      sort: true,
    }, {
      dataField: 'year',
      text: 'Year',
      sort: true,
    }];

    return ( 
      <div>
        <div className="d-flex">
          <h2 className="vehicles-header mr-3">Vehicles</h2>
          <VehicleModal updateList={this.updateVehicles.bind(this)} />
        </div>
        { loading ? <h2 style={{textAlign: "center"}}>Loading...</h2> : 
        <BootstrapTable keyField="id" data={this.state.vehicles} columns ={columns} pagination={paginationFactory()} filter={filterFactory()} rowEvents={{onClick: this.props.onItemSelected}} /> 
        }
      </div>  
    )
  }
};