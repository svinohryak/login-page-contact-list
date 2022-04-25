import styled from "styled-components";

const Spiner = styled.div`
  width: 2.1875rem;
  height: 2.1875rem;
  margin: 2rem auto;
  border-radius: 50%;
  border: 0.3125rem solid #45c0d9;
  border-top: 0.3125rem solid transparent;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spiner;
