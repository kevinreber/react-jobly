import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home';
import Companies from './Components/Companies';
import Company from './Components/Company';
import Jobs from './Components/Jobs';
import Job from './Components/Job';
import Profile from './Components/Profile';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';

function Routes({ getCurrentUser }){
    return(
        <>
        <Switch>
        <PrivateRoute exact path="/companies" component={Companies} />
        <PrivateRoute exact path="/companies/:handle" component={Company} />
        <PrivateRoute exact path="/jobs" component={Jobs} />
        <PrivateRoute exact path="/jobs/:id" component={Job} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route exact path="/login">
          <Login getCurrentUser={getCurrentUser} />
        </Route>
        <Route exact path="/" component={Home} />
        <Redirect to="/login" />
      </Switch>
      </>
    )
}

export default Routes;