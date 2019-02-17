import React from 'react';
import PropTypes from 'prop-types';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import { Header, LogoContainer, Nav } from './styles';

const Toolbar = (props) => {
  const { drawerToggleClicked } = props;
  return (
    <Header>
      <DrawerToggle clicked={drawerToggleClicked} />
      <LogoContainer>Rfgp</LogoContainer>
    </Header>
  );
};

export default Toolbar;
