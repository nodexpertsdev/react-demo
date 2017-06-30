/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';
import TasksContainer from './modules/Tasks/TasksContainer';
// Enter a route to get started
// <Route path='' component={} >
export default (
  <Route path="/" component={App}>
    <IndexRoute component={TasksContainer} />
  </Route>
);
