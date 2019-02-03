import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Login from './containers/Login/Login';
import PageNotFound from './containers/PageNotFound/PageNotFound';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Redirect exact from="/" to="/login" />

            <Route exact path="/login/:id" />

            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
