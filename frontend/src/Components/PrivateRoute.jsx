import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from './UserContext';

function PrivateRoute({ path, component }){
    /** User must be logged in, in order to access Private Routes */
    const currentUser = useContext(UserContext);

    /** if user isn't logged in, redirect to login page */
    if (!currentUser){
        return(
            <Redirect to="/login" />
        )
    }

    return (
        <Route exact path={path} component={component} />
    )
}

export default PrivateRoute;