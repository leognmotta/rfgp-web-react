import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { isAuthenticated } from '../services/auth';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    ))
    }
  />
);

export const IsLogged = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated() ? (
      <Redirect to={{ pathname: '/produtos', state: { from: props.location } }} />
    ) : (
      <Component {...props} />
    ))
    }
  />
);

/**
 * Prop types
 */
PrivateRoute.defaultProps = {
  location: undefined,
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.objectOf(Object),
};

IsLogged.defaultProps = {
  location: undefined,
};

IsLogged.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.objectOf(Object),
};
