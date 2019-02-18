import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as sideDrawerActions } from '../../../store/ducks/layout';

import { BackDrop } from './styles';

const Backdrop = (props) => {
  const { showSideDrawer, sideDrawerToggle } = props;
  return showSideDrawer ? <BackDrop onClick={sideDrawerToggle} /> : null;
};

const mapStateToProps = state => ({
  showSideDrawer: state.layout.showSideDrawer,
});

const mapDispatchToProps = dispatch => bindActionCreators(sideDrawerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Backdrop);

/**
 * Prop types
 */
Backdrop.propTypes = {
  showSideDrawer: PropTypes.bool.isRequired,
  sideDrawerToggle: PropTypes.func.isRequired,
};
