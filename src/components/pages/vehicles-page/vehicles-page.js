import React from 'react';
import {withRouter} from 'react-router-dom'

import Vehicleslist from '../vehicles-page/vehicles-list'

const VehiclesPage = ({history}) => {

  return (
    <Vehicleslist onItemSelected={(e, row) => {
      const newPath = `vehicles/edit/${row.id}`;
      history.push(newPath);
    }}/>
  )

};

export default withRouter(VehiclesPage);