import React from 'react';

import PropTypes from 'prop-types';

import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import { AppContainer } from './styles';

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Toolbar />
      <SideDrawer />
      <AppContainer>{children}</AppContainer>
    </>
  );
};

export default Layout;
