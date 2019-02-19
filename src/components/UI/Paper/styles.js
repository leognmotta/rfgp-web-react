import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.bgColor};
  padding: 20px;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: center;
  align-items: center;
`;
