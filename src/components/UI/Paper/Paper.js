import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

const Paper = ({ children, flexDirection, bgColor }) => (
  <Container flexDirection={flexDirection} bgColor={bgColor}>
    {children}
  </Container>
);

export default Paper;

/**
 * Prop types
 */
Paper.propTypes = {
  children: PropTypes.node.isRequired,
  flexDirection: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};
