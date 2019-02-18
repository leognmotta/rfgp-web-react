import React from 'react';

import { FaTimes } from 'react-icons/fa';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as sideDrawerActions } from '../../store/ducks/layout';

// import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../UI/Backdrop/Backdrop';

import { LogoContainer, Drawer, Toggle } from './styles';

const SideDrawer = (props) => {
  const { showSideDrawer, sideDrawerToggle } = props;

  let translateX = '-100%';
  if (showSideDrawer) translateX = '0';

  return (
    <>
      <Backdrop />
      <Drawer translate={translateX}>
        <Toggle onClick={sideDrawerToggle}>
          <FaTimes />
        </Toggle>
        <LogoContainer>Rfgp</LogoContainer>
        <nav>items</nav>
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
)(SideDrawer);
