import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.bgColor};
  padding: ${props => props.padding}em;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  border: ${props => props.border};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
