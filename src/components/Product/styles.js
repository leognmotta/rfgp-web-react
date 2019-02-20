import styled from 'styled-components';

export const Container = styled.div`
  margin: 1em auto;
  max-width: 520px;
  flex-direction: row;
`;

export const Info = styled.div`
  padding: 0.5em;
  border-bottom: solid 1px #ccc;
  width: 100%;
  p {
    text-align: center;
    margin: 0.8em 0;
  }
`;

export const Prices = styled.div`
  padding: 0.5em;
  border-bottom: solid 1px #ccc;
  width: 100%;
  .highlight {
    background-color: #f2f2f2;
    width: 100%;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2em;
    margin: 0.4em 0;

    @media (min-width: 420px) {
      padding: 0 5em;
    }
    @media (min-width: 510px) {
      padding: 0 8em;
    }
  }
`;

export const Stock = styled.div`
  padding: 0.5em;
`;

export const Controller = styled.div``;
