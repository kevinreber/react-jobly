import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Components/Home';
import Companies from '../Components/companies/Companies';
import Company from '../Components/companies/Company';
import Jobs from '../Components/jobs/Jobs';
import JobDetails from '../Components/jobs/JobDetails';
import Profile from '../Components/user/Profile';
import Login from '../Components/user/Login';
import PrivateRoute from '../auth/PrivateRoute';

function Routes({ signup, login }){
    return(
        <>
        <Switch>
        <PrivateRoute exact path="/companies" component={Companies} />
        <PrivateRoute exact path="/companies/:handle" component={Company} />
        <PrivateRoute exact path="/jobs" component={Jobs} />
        <PrivateRoute exact path="/jobs/:id" component={JobDetails} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route exact path="/login">
          <Login signup={signup} login={login} />
        </Route>
        <Route exact path="/" component={Home} />
        <Redirect to="/login" />
      </Switch>
      </>
    )
}

export default Routes;