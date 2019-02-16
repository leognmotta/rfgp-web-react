import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { IsLogged, PrivateRoute } from './helper/CustomRouteComponent';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <IsLogged path="/" component={() => <h1>Hello</h1>} />
      {/* <IsLogged path="/signup" component={SignUp} />
      <PrivateRoute exact path="/" component={App} />
      <Route path="/home" component={() => <h1>Landing page</h1>} />
      <Route path="*" component={() => <h1>Page not found</h1>} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
