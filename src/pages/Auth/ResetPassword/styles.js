import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5em;
`;

export const Form = styled.form`
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    width: 100%;
    input {
      flex: 1;
      height: 46px;
      margin-bottom: 15px;
      padding: 0 20px;
      color: #777;
      font-size: 15px;
      width: 100%;
      border: 1px solid #ddd;
      &::placeholder {
        color: #999;
      }
    }
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }

  button {
    margin-top: 2em;
    color: #fff;
    font-size: 16px;
    background: #262626;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
  }
`;
