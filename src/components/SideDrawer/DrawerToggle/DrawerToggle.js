import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as sideDrawerActions } from '../../../store/ducks/layout';


import { Toggle } from './styles';

const DrawerToggle = (props) => {
  const { sideDrawerToggle } = props;
  return (
    <Toggle onClick={sideDrawerToggle}>
      <div />
      <div />
      <div />
    </Toggle>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators(sideDrawerActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(DrawerToggle);
