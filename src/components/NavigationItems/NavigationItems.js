import React, { Component } from 'react';

import { FaSignOutAlt } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as sideDrawerActions } from '../../store/ducks/layout';
import { logout, isAuthenticated } from '../../services/auth';

import NavigationItem from './NavigationItem/NavigationItem';
import { Ul, SignOut } from './styles';

class NavigationItems extends Component {
  signOutHandler = () => {
    const { sideDrawerToggle, history } = this.props;
    logout();
    sideDrawerToggle();
    history.push('/');
  };

  render() {
    const { sideDrawerToggle } = this.props;
    const navigationItems = ['Entrar', 'Registrar', 'Produtos', 'Carrinhos'];

    const signout = (
      <SignOut>
        <FaSignOutAlt color="red" />
        <button type="button" onClick={this.signOutHandler}>
          Sair
        </button>
      </SignOut>
    );
    return (
      <>
        <Ul>
          {navigationItems.map(item => (
            <NavigationItem key={item} text={item} clicked={sideDrawerToggle} />
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

/**
 * Prop types
 */

NavigationItems.propTypes = {
  sideDrawerToggle: PropTypes.func.isRequired,
  history: PropTypes.objectOf(Object).isRequired,
};
