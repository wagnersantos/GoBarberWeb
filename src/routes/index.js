import React from 'react';
import { Router, Switch } from 'react-router-dom';
import Route from './route';

import history from 'core/utils/history';
import Dashboard from 'pages/Dashboard';
import Profile from 'pages/Profile';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  </Router>
);

export default Routes;
