import React from 'react';

// import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../UI/Backdrop/Backdrop';

import { LogoContainer, Drawer } from './styles';

const sideDrawer = (props) => {
  const { open, closed } = props;

  let translateX = '-100%';
  if (open) translateX = '0';
  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <Drawer translate={translateX}>
        <LogoContainer>Rfgp</LogoContainer>
        <nav>items</nav>
      </Drawer>
    </>
  );
};

export default sideDrawer;
