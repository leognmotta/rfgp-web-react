import React from 'react';
import { connect } from 'react-redux';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import { Header, LogoContainer } from './styles';

const Toolbar = (props) => {
  const { drawerToggleClicked, showSideDrawer } = props;

  let translateX = '0';
  if (showSideDrawer) translateX = '320%';

  return (
    <Header>
      <DrawerToggle clicked={drawerToggleClicked} />
      <LogoContainer translate={translateX}>Rfgp</LogoContainer>
    </Header>
  );
};

const mapStateToProps = state => ({
  showSideDrawer: state.layout.showSideDrawer,
});

export default connect(
  mapStateToProps,
  null,
)(Toolbar);
