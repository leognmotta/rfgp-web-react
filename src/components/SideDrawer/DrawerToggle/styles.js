import styled from 'styled-components';

export const Toggle = styled.div`
  width: 40px;
  height: 80%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;

  div {
    width: 70%;
    height: 2px;
    background-color: white;
  }
`;
