import styled from 'styled-components';

export const LogoContainer = styled.div``;

export const Drawer = styled.div`
  transform: ${props => `translateX(${props.translate})`};
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: #fff;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
`;
