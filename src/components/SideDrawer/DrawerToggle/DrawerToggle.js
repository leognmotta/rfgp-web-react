import React from 'react';
import PropTypes from 'prop-types';

import { Toggle } from './styles';

const DrawerToggle = (props) => {
  const { clicked } = props;
  return (
    <Toggle onClick={clicked}>
      <div />
      <div />
      <div />
    </Toggle>
  );
};

export default DrawerToggle;
