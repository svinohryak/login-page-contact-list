import { FC } from "react";
import * as Styled from "./styles";

interface IPasswodStrengthBar {
  strengthLevel: string;
  passwordStatus: boolean;
}

const PasswordStrenghBar: FC<IPasswodStrengthBar> = ({
  strengthLevel,
  passwordStatus,
}) => {
  console.log(strengthLevel, passwordStatus);
  return (
    <Styled.Wrapper>
      <Styled.Bar strengthLevel={strengthLevel} />
    </Styled.Wrapper>
  );
};

export default PasswordStrenghBar;
