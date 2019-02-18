import styled from 'styled-components';

export const SideDrawerHeader = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  border-bottom: solid 1px #cccccc;
  padding: 0.8em 0;
`;

export const LogoContainer = styled.div`
  font-size: 1.5em;
`;

export const Drawer = styled.div`
  transform: ${props => `translateX(${props.translate})`};
  position: fixed;
  width: 240px;
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
  font-size: 1.5em;
  z-index: 1000;
  cursor: pointer;
`;

export const Nav = styled.nav`
  padding: 0.8em 0;
`;
