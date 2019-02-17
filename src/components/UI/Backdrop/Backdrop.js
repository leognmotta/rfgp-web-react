import React from 'react';

import { BackDrop } from './styles';

const backdrop = (props) => {
  const { show, clicked } = props;
  return show ? <BackDrop onClick={clicked} /> : null;
};

export default backdrop;
