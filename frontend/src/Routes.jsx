import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Companies from './Components/Companies';
import Company from './Components/Company';
import Jobs from './Components/Jobs';
import Job from './Components/Job';
import Profile from './Components/Profile';
import Login from './Components/Login';

function Routes({getCurrentUser}){
    return(
        <>
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/companies">
          <Companies />
        </Route>
        <Route exact path="/companies/:handle">
          <Company />
        </Route>
        <Route exact path="/jobs">
          <Jobs />
        </Route>
        <Route exact path="/jobs/:id">
          <Job />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/login">
          <Login getCurrentUser={getCurrentUser} />
        </Route>
      </Switch>
      </>
    )
}

export default Routes;