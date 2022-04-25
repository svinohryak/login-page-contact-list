import { FC } from "react";
import * as Styled from "./styles";
import * as CommonStyled from "../../common styles/styles";

interface IPasswodStrengthBar {
  strengthLevel: string;
  passwordStatus: boolean;
}

const PasswordStrenghBar: FC<IPasswodStrengthBar> = ({
  strengthLevel,
  passwordStatus,
}) => {
  return (
    <CommonStyled.StrengthLevelBox>
      <Styled.Wrapper>
        <Styled.Bar strengthLevel={strengthLevel} />
      </Styled.Wrapper>
      <div className="strength-title">{strengthLevel}</div>
    </CommonStyled.StrengthLevelBox>
  );
};

export default PasswordStrenghBar;
