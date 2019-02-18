import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import { IsLogged, PrivateRoute } from './helper/CustomRouteComponent';

import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Products from './pages/Products/Products';
import NotFound from './pages/404/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <IsLogged exact path="/" component={SignIn} />
        <IsLogged path="/signup" component={SignUp} />
        <PrivateRoute exact path="/produtos" component={Products} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
