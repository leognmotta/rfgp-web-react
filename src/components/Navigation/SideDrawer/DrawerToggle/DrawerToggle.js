import React from 'react';

import { withStyles, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';

const drawerToggle = props => {
  const { classes, open } = props;
  return (
    <IconButton
      className={classNames(classes.menuButton, open && classes.hide)}
      color="inherit"
      aria-label="Open drawer"
      onClick={props.drawerOpen}
    >
      <MenuIcon />
    </IconButton>
  );
};

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  }
};

export default withStyles(styles)(drawerToggle);
