import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import {
  PowerSettingsNew,
  Settings,
  List,
  ShoppingCart
} from '@material-ui/icons';

const navigationItem = props => {
  let menu;
  const { classes } = props;

  switch (props.menu) {
    case 'Logout':
      menu = (
        <>
          <Divider />
          <ListItem button key={props.menu}>
            <ListItemIcon>
              <PowerSettingsNew className={classes.danger} />
            </ListItemIcon>
            <ListItemText primary={props.menu} />
          </ListItem>
        </>
      );
      break;
    case 'Settings':
      menu = (
        <ListItem button key={props.menu}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary={props.menu} />
        </ListItem>
      );
      break;
    case 'Produtos':
      menu = (
        <ListItem button key={props.menu}>
          <ListItemIcon>
            <List />
          </ListItemIcon>
          <ListItemText primary={props.menu} />
        </ListItem>
      );
      break;
    case 'Carrinho':
      menu = (
        <ListItem button key={props.menu}>
          <ListItemIcon>
            <ShoppingCart />
          </ListItemIcon>
          <ListItemText primary={props.menu} />
        </ListItem>
      );
      break;
    default:
      menu = (
        <ListItem button key={props.menu}>
          <ListItemIcon>
            <PowerSettingsNew />
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
