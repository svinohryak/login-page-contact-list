import styled from "styled-components";

export interface IStrengthLevel {
  "too short": string;
  weak: string;
  good: string;
  ok: string;
  strong: string;
}

const barFillingStyle: Map<string, string> = new Map([
  ["too short", "width: 0"],
  ["weak", "width: 25%; background-color: #E62214;"],
  ["ok", "width: 50%; background-color: #E6BF3E;"],
  ["good", "width: 75%; background-color: #45C0D9;"],
  ["strong", "width: 100%; background-color: #5EF041;"],
]);

interface IBar {
  strengthLevel: string;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 5px;
  background-color: lightgray;
  position: relative;
`;

export const Bar = styled.div<IBar>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  ${({ strengthLevel }) =>
    strengthLevel ? barFillingStyle.get(strengthLevel) : ""}
`;
