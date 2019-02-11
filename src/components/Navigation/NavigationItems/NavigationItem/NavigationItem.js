import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles
} from '@material-ui/core';
import { Clear } from '@material-ui/icons';

const navigationItem = props => {
  let menu;
  const { classes } = props;

  switch (props.menu) {
    case 'logout':
      menu = (
        <ListItem button key={props.menu}>
          <ListItemIcon>
            <Clear className={classes.danger} />
          </ListItemIcon>
          <ListItemText primary={props.menu} />
        </ListItem>
      );
      break;
    default:
      menu = (
        <ListItem button key={props.menu}>
          <ListItemIcon>
            <Clear />
          </ListItemIcon>
          <ListItemText primary={props.menu} />
        </ListItem>
      );
  }

  return (
    <li>
      <NavLink
        onClick={props.closeHandle}
        className={classes.resetLinks}
        to={props.link}
        exact
      >
        {menu}
      </NavLink>
    </li>
  );
};

const styles = {
  resetLinks: {
    textDecoration: 'none'
  },
  danger: {
    color: 'red'
  }
};

export default withStyles(styles)(navigationItem);
