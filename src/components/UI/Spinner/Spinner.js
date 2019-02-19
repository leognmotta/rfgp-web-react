import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const Spinner = ({ color }) => (
  <StyledSpinner color={color} viewBox="0 0 50 50">
    <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
  </StyledSpinner>
);

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  width: 50%;
  height: 50%;

  & .path {
    stroke: ${props => props.color || '#fff'};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default Spinner;

/**
 * Prop types
 */
Spinner.propTypes = {
  color: PropTypes.string.isRequired,
};
