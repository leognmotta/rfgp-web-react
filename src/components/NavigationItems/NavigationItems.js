import React, { Component } from 'react';

import { FaSignOutAlt } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as sideDrawerActions } from '../../store/ducks/layout';
import { logout, isAuthenticated } from '../../services/auth';

import NavigationItem from './NavigationItem/NavigationItem';
import { Ul, SignOut } from './styles';

class NavigationItems extends Component {
  signOutHandler = () => {
    logout();
    this.props.sideDrawerToggle();
    this.props.history.push('/');
  };

  render() {
    const navigationItems = ['Sign In', 'Sign Up', 'Produtos'];

    const signout = (
      <SignOut>
        <FaSignOutAlt color="red" />
        <button onClick={this.signOutHandler}>Sign Out</button>
      </SignOut>
    );
    return (
      <>
        <Ul>
          {navigationItems.map(item => (
            <NavigationItem key={item} text={item} clicked={this.props.sideDrawerToggle} />
          ))}
        </Ul>
        {isAuthenticated() ? signout : null}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(sideDrawerActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(NavigationItems));
