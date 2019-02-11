import React, { Component } from 'react';

import { withStyles, AppBar, Typography } from '@material-ui/core';
import classNames from 'classnames';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open
          })}
          position="fixed"
        >
          <Toolbar open={this.state.open} drawerOpen={this.handleDrawerOpen}>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Rfgp
            </Typography>
          </Toolbar>
        </AppBar>
        <SideDrawer
          drawerClose={this.handleDrawerClose}
          open={this.state.open}
        />
        <main className={classes.defaultMain}>{this.props.children}</main>
      </div>
    );
  }
}

const drawerWidth = 240;
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  defaultMain: {
    marginTop: 56,
    padding: 14
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  }
});

export default withStyles(styles, { withTheme: true })(Layout);
