import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { FaTimes } from 'react-icons/fa';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as sideDrawerActions } from '../../store/ducks/layout';

// import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import {
  LogoContainer, Drawer, Toggle, SideDrawerHeader, Nav,
} from './styles';

const SideDrawer = (props) => {
  const { showSideDrawer, sideDrawerToggle } = props;

  let translateX = '-100%';
  if (showSideDrawer) translateX = '0';

  return (
    <>
      <Backdrop />
      <Drawer translate={translateX}>
        <SideDrawerHeader>
          <Toggle onClick={sideDrawerToggle}>
            <FaTimes />
          </Toggle>
          <LogoContainer>Rfgp</LogoContainer>
        </SideDrawerHeader>
        <Nav>
          <NavigationItems />
        </Nav>
      </Drawer>
    </>
  );
};

const mapStateToProps = state => ({
  showSideDrawer: state.layout.showSideDrawer,
});

const mapDispatchToProps = dispatch => bindActionCreators(sideDrawerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(SideDrawer));

/**
 * Prop types
 */
SideDrawer.propTypes = {
  showSideDrawer: PropTypes.bool.isRequired,
  sideDrawerToggle: PropTypes.func.isRequired,
};
