import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const SignOut = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em 0;
  border-top: solid 1px #ccc;

  button {
    border: none;
    background-color: transparent;
    font-size: inherit;
    margin-left: 1em;
    padding: 0 0.5em;
    cursor: pointer;
  }
`;
