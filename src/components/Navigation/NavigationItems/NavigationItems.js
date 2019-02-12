import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import Divider from '@material-ui/core/Divider';
import { List, withStyles } from '@material-ui/core';

const navigationItems = props => {
  const { classes } = props;
  return (
    <ul className={classes.resetUL}>
      <List>
        <Divider />
        <NavigationItem
          closeHandle={props.closeHandle}
          link="/produtos"
          menu="Produtos"
        />
        <NavigationItem
          closeHandle={props.closeHandle}
          link="/carrinho"
          menu="Carrinho"
        />
        <NavigationItem
          closeHandle={props.closeHandle}
          link="/settings"
          menu="Settings"
        />

        <NavigationItem
          closeHandle={props.closeHandle}
          link="/login"
          menu="Logout"
        />
      </List>
    </ul>
  );
};

const styles = {
  resetUL: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    alingnItems: 'center'
  }
};

export default withStyles(styles)(navigationItems);
