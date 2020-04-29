import React from 'react';
import {withRouter} from 'react-router-dom'

import Vehicleslist from './vehicles-list'

const VehiclesPage = ({history}) => {

  return (
    <div className="container vehicles-page">
      <Vehicleslist onItemSelected={(e, row) => {
        const newPath = `vehicles/edit/${row.id}`;
        history.push(newPath);
      }}/>
    </div>

  )

};

export default withRouter(VehiclesPage);