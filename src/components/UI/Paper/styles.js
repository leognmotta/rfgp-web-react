import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  background: ${props => props.bgColor};
  padding: 20px;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: center;
`;
