import styled from "styled-components";

export const ModalLayout = styled.div`
  background-color: #edeef090;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBox = styled.div`
  background-color: #fff;
  box-shadow: 0 0 3px lightgray;
  border-radius: 5px;
  padding: 20px;
  position: relative;
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
`;
