import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import { IsLogged, PrivateRoute } from './helper/CustomRouteComponent';

import SignIn from './pages/Auth/SignIn/SignIn';
import SignUp from './pages/Auth/SignUp/SignUp';
import ValidateEmail from './pages/Auth/ValidateEmail/ValidateEmail';
import ForgotPassword from './pages/Auth/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword';
import Products from './pages/Products/Products';
import NotFound from './pages/404/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <IsLogged exact path="/" component={SignIn} />
        <IsLogged path="/signup" component={SignUp} />
        <Route path="/validar-email/:token" component={ValidateEmail} />
        <IsLogged path="/esqueci-minha-senha" component={ForgotPassword} />
        <IsLogged path="/resetar-senha/:token" component={ResetPassword} />
        <PrivateRoute exact path="/produtos" component={Products} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
