import styled, { keyframes } from "styled-components";

interface IForm {
  isModal?: boolean;
}

interface IButton {
  isContactListButton?: boolean;
}

const showModal = keyframes`
to {
  transform: translateY(0);
  opacity: 1;
}
`;

export const Form = styled.div<IForm>`
  width: 19.25rem;
  margin: 15vh auto;
  padding: 1rem;
  display: block;
  border: 1px solid #d8dee4;
  border-radius: 0.625rem;
  background-color: #fff;
  box-shadow: 0 0 0.625rem #00000075;

  ${({ isModal }) =>
    isModal &&
    "transform: translateY(-30px); opacity: 0; animation: showModal 300ms 150ms forwards;"}
  animation: ${showModal} 300ms 150ms forwards;

  & > h1 {
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 0.625rem;
  }

  label {
    display: block;
    font-size: 14px;
    margin-bottom: 6px;
    margin-top: 16px;
    font-weight: 400;
    text-align: left;
  }

  & > form {
    margin-bottom: 1rem;
  }

  & > p {
    text-align: center;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin-top: 0.25rem;
  padding: 5px 12px;
  border-radius: 6px;
  border: 1px solid #d0d7de;
`;

export const FromButton = styled.button<IButton>`
  display: block;
  text-align: center;
  color: #fff;
  background-color: #40c463;
  cursor: pointer;
  padding: 5px 12px;
  border-radius: 6px;
  border-color: #1b1f2426;
  ${({ isContactListButton }) =>
    isContactListButton ? "margin: 5px 0;" : "margin-top: 16px; width: 100%; "}
  ${({ disabled }) =>
    disabled
      ? "background-color: #a2b4a7; cursor: not-allowed; "
      : "background-color: #40c463; &:hover,&:focus {background-color: #3f9f59; transition: 0.3s;}; &:active { transform: scale(0.98)}; "}
`;

export const CloseButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  position: absolute;
  right: 10px;
  top: 6px;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    top: 4px;
    font-size: 20px;
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const StrengthLevelBox = styled.div`
  width: 96%;
  height: 1.25rem;
  margin: 1px auto;
  margin-bottom: -0.75rem;
  & > .strength-title {
    font-size: 12px;
    color: #918888;
    text-align: right;
  }
`;

export const ErrorMessageBox = styled.div`
  opacity: 0;
  width: 90%;
  margin: 10px auto;
  background-color: #f5889a80;
  border: 1px solid #eb5971ed;
  padding: 6px 10px;
  text-align: center;
  border-radius: 10px;
  animation: ${showModal} 300ms 150ms forwards;
`;
