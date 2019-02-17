import styled from 'styled-components';

export const Header = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #262626;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`;

export const LogoContainer = styled.div`
  color: #fff;
  margin-left: 1em;
  font-size: 1.5em;
  transform: ${props => `translateX(${props.translate})`};
  transition: transform 0.3s ease-out;
`;
