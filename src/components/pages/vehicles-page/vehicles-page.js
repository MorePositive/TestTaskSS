import React from 'react';
import {withRouter} from 'react-router-dom'

import Vehicleslist from './vehicles-list'
import VehicleModal from './vehicle-modal'

const VehiclesPage = ({history}) => {

  return (
    <div className="container vehicles-page">
      <div className="d-flex">
        <h2 className="vehicles-header mr-3">Vehicles</h2>
        <VehicleModal />
      </div>
      <Vehicleslist onItemSelected={(e, row) => {
        const newPath = `vehicles/edit/${row.id}`;
        history.push(newPath);
      }}/>
    </div>

  )

};

export default withRouter(VehiclesPage);