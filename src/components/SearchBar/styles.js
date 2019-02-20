import styled from 'styled-components';

export const Container = styled.div`
  max-width: 520px;
  margin: 0 auto;
  .search-for {
    margin: 0.5em auto;
    text-align: center;
    input {
      margin-left: 1em;
      margin-right: 0.5em;
      height: 13px;
      width: 13px;
      background-color: #fff;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  .search-bar {
    height: 44px;
    border-radius: 2em;
    border: 1px solid #ccc;
    padding: 0.3em 1.3em;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    button {
      height: 150%;
      width: 20%;
      background-color: transparent;
      border: none;
      color: #262626;
      padding: 0.5em;
      cursor: pointer;
    }
    input {
      height: 100%;
      width: 85%;
      border: none;
      font-size: 18px;
    }
  }
`;
