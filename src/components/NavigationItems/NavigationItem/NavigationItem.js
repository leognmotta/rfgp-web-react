import React from 'react';

import PropTypes from 'prop-types';
import {
  FaShoppingCart, FaSignInAlt, FaBoxOpen, FaUserPlus,
} from 'react-icons/fa';
import { isAuthenticated } from '../../../services/auth';
import { StyledLink, Li } from './styles';

const NavigationItem = (props) => {
  const { text, clicked } = props;

  let display = 'none';

  let li;
  switch (text) {
    case 'Entrar':
      if (!isAuthenticated()) display = 'flex';
      li = (
        <Li display={display}>
          <FaSignInAlt />
          <StyledLink onClick={clicked} to="/">
            {text}
          </StyledLink>
        </Li>
      );
      break;

    case 'Produtos':
      if (isAuthenticated()) display = 'flex';
      li = (
        <Li display={display}>
          <FaBoxOpen />
          <StyledLink onClick={clicked} to="/produtos">
            {text}
          </StyledLink>
        </Li>
      );
      break;

    case 'Carrinhos':
      if (isAuthenticated()) display = 'flex';
      li = (
        <Li display={display}>
          <FaShoppingCart />
          <StyledLink onClick={clicked} to="/carrinhos">
            {text}
          </StyledLink>
        </Li>
      );
      break;

    case 'Registrar':
      if (!isAuthenticated()) display = 'flex';
      li = (
        <Li display={display}>
          <FaUserPlus />
          <StyledLink onClick={clicked} to="/signup">
            {text}
          </StyledLink>
        </Li>
      );
      break;

    default:
      li = null;
      break;
  }
  return <>{li}</>;
};

export default NavigationItem;

/**
 * Prop types
 */

NavigationItem.propTypes = {
  text: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
};
