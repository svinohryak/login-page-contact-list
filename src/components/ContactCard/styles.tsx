import styled from "styled-components";

export const Wrapper = styled.div`
  width: 550px;
  margin: 15vh auto;
  padding: 1rem;
  display: block;
  border: 1px solid #d8dee4;
  border-radius: 0.625rem;
  background-color: #fff;
  box-shadow: 0 0 0.625rem #00000075;
`;

export const ContactCard = styled.div`
  position: relative;
  width: 100%;
  margin: 1rem 0;
  border-bottom: 1px solid #d8dee4;
  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;
  & > .image-box {
    justify-self: center;
  }
`;
