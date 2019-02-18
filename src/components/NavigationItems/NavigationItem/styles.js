import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: block;
  margin-left: 1em;
  text-decoration: none;
  color: inherit;
  padding: 0 0.5em;
  cursor: pointer;
`;

export const Li = styled.li`
  display: ${props => props.display};
  flex-direction: row;
  padding: 1em 0;
`;
