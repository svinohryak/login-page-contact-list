import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem;
  display: block;
  background-color: #fff;
  width: 100vw;
  @media (min-width: 560px) {
    width: 550px;
    margin: 10vh auto;
    border: 1px solid #d8dee4;
    border-radius: 0.625rem;
    box-shadow: 0 0 0.625rem #00000075;
  }
`;

export const HomePageHeader = styled.div`
  display: grid;
  grid-template-columns: 85% 15%;
  align-items: center;
  justify-items: center;
  & > p {
    font-size: 24px;
    font-weight: 300;
  }
`;
