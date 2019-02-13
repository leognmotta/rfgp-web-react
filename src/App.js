import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import api from './services/api';

import Layout from './hoc/Layout/Layout';
import Login from './containers/Login/Login';
import PageNotFound from './containers/PageNotFound/PageNotFound';
import * as actionCreators from './store/actions/index';

class App extends Component {
  async componentDidMount() {
    const token = localStorage.getItem('rfgptoken:');
    const userId = localStorage.getItem('rfgpuserid:');

    if (!token || !userId) {
      return this.props.onLogout();
    }

    let isValidToken;
    try {
      isValidToken = await api.get('/auth/is-valid-token', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      });

      if (isValidToken.data.message) {
        return this.props.onLogin();
      }
      console.log(isValidToken);
    } catch {
      this.props.onLogout();
    }
  }

  render() {
    let routesLogged;
    let routesLoggedOut;
    if (this.props.auth) {
      routesLogged = (
        <Switch>
          <Route exact path="/" />
          <Route component={PageNotFound} />
          <Redirect to="/" />
        </Switch>
      );
    } else {
      routesLoggedOut = (
        <Switch>
          <Route exact path="/" component={Login} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>{this.props.auth ? routesLogged : routesLoggedOut}</Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.isLogged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => dispatch(actionCreators.login()),
    onLogout: () => dispatch(actionCreators.logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
