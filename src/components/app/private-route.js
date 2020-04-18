import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const defaultRedirect = '/about';

const PrivateRoute = ({ component: Component, user, roles, ...rest }) => (
    <Route {...rest} render={props => {
        if (roles && user && roles.indexOf(user.role) === -1) {
            // role not authorised so redirect to home page
            return <Redirect to={{ pathname:defaultRedirect }} />
        }
        return <Component {...props} />
    }} />
)

export default PrivateRoute;