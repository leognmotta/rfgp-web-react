import React from 'react';

import { BackDrop } from './styles';

const Backdrop = (props) => {
  const { show, clicked } = props;
  return show ? <BackDrop onClick={clicked} /> : null;
};

export default Backdrop;
