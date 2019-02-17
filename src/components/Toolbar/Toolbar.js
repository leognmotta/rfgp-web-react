import React from 'react';
import PropTypes from 'prop-types';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import { Header, LogoContainer, Nav } from './styles';

const Toolbar = (props) => {
  const { drawerToggleClicked, open } = props;

  let translateX = '0';
  if (open) translateX = '400%';

  return (
    <Header>
      <DrawerToggle clicked={drawerToggleClicked} />
      <LogoContainer translate={translateX}>Rfgp</LogoContainer>
    </Header>
  );
};

export default Toolbar;
