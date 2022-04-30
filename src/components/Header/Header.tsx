import { FC, memo } from "react";
import * as Styled from "./styles";
import * as CommonStyled from "../../common styles/styles";

interface IHeader {
  userEmail: string | null;
  handleSignOut: () => void;
}

const HeaderInner: FC<IHeader> = ({ userEmail, handleSignOut }) => {
  return (
    <Styled.HomePageHeader>
      <p>
        <strong>{userEmail}</strong> contacts
      </p>
      <CommonStyled.FromButton
        isContactListButton={true}
        onClick={handleSignOut}
      >
        Log out
      </CommonStyled.FromButton>
    </Styled.HomePageHeader>
  );
};

export const Header = memo(HeaderInner);
