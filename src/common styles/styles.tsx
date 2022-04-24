import styled from "styled-components";

export const Form = styled.div`
  width: 19.25rem;
  margin: 15vh auto;
  padding: 1rem;
  display: block;
  border: 1px solid #d8dee4;
  border-radius: 0.625rem;
  background-color: #fff;
  box-shadow: 0 0 0.625rem #00000075;

  & > h1 {
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 0.625rem;
  }

  & > form > button {
    display: block;
    width: 100%;
    text-align: center;
    color: #fff;
    background-color: #40c463;
    cursor: pointer;
    padding: 5px 12px;
    margin-top: 16px;
    border-radius: 6px;
    border-color: #1b1f2426;
  }

  & > form > label {
    display: block;
    font-size: 14px;
    margin-bottom: 6px;
    margin-top: 16px;
    font-weight: 400;
    text-align: left;
  }

  & > form > input {
    display: block;
    width: 100%;
    margin-top: 0.25rem;
    /* margin-bottom: 1rem; */
    padding: 5px 12px;
    border-radius: 6px;
    border: 1px solid #d0d7de;
  }

  & > form {
    margin-bottom: 1rem;
  }

  & > p {
    text-align: center;
  }
`;
