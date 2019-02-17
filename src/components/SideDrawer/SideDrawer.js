import React from 'react';

// import NavigationItems from '../NavigationItems/NavigationItems';
import { FaTimes } from 'react-icons/fa';
import Backdrop from '../UI/Backdrop/Backdrop';

import { LogoContainer, Drawer, Toggle } from './styles';

const SideDrawer = (props) => {
  const { open, closed, drawerToggleClicked } = props;

  let translateX = '-100%';
  if (open) translateX = '0';

  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <Drawer translate={translateX}>
        <Toggle onClick={drawerToggleClicked}>
          <FaTimes />
        </Toggle>
        <LogoContainer>Rfgp</LogoContainer>
        <nav>items</nav>
      </Drawer>
    </>
  );
};

export default SideDrawer;
