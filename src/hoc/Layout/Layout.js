import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import {
  StyledAppBar, Container, StyledTypography, StyledIconButton, MainPage,
} from './styles';

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Container>
        <StyledAppBar>
          <Toolbar>
            <StyledIconButton color="inherit" aria-label="Menu">
              <Menu />
            </StyledIconButton>
            <StyledTypography variant="h6" color="inherit">
              Rfgp
            </StyledTypography>
          </Toolbar>
        </StyledAppBar>
      </Container>
      <MainPage>{children}</MainPage>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
