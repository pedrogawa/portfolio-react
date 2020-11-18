import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ContactPage from '../pages/ContactPage';
import LandingPage from '../pages/LandingPage';
import ProjectsPage from '../pages/ProjectsPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={LandingPage} exact />
    <Route path="/contact" component={ContactPage} />
    <Route path="/projects" component={ProjectsPage} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
