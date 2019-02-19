import React from 'react';

import { Container } from './styles';

const Paper = ({ children, flexDirection, bgColor }) => (
  <Container flexDirection={flexDirection} bgColor={bgColor}>
    {children}
  </Container>
);

export default Paper;
