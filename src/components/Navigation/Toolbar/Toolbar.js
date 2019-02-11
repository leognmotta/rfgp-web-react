import React from 'react';

import { withStyles, Toolbar } from '@material-ui/core';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = props => {
  const { classes, open } = props;
  return (
    <Toolbar className={classes.ToolbarColor}>
      <DrawerToggle open={open} drawerOpen={props.drawerOpen} />
      {props.children}
    </Toolbar>
  );
};

const styles = {
  ToolbarColor: {
    backgroundColor: '#262626'
  }
};

export default withStyles(styles)(toolbar);
