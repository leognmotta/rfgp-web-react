import styled from 'styled-components';

export const LogoContainer = styled.div`
  font-size: 1.5em;
  transform: translateY(-240%);
`;

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
  display: flex;
  flex-direction: column;
`;

export const Toggle = styled.div`
  align-self: flex-end;
  margin-bottom: 1.5em;
  font-size: 1.5em;
  z-index: 1000;
  cursor: pointer;
`;
