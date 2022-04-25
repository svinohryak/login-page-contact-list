import styled, { keyframes } from "styled-components";

const showup = keyframes`
from {
  opacity:0
}
to {
  opacity: 1;
}
`;

export const ModalLayout = styled.div`
  background-color: #edeef06f;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${showup} 250ms ease-out;
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
