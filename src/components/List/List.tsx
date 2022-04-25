import { FC } from "react";
import { IUserContact } from "../../types/types";
import Spiner from "../Spiner/Spiner";
import * as Styled from "./styles";
import * as CommonStyled from "../../common styles/styles";

interface IListProps {
  userContacts: IUserContact[];
  onRemove: (contact: string) => void;
  isLoading: boolean;
  error: string;
  onSelectUserContact: (userContact: IUserContact) => void;
}

const List: FC<IListProps> = ({
  userContacts,
  isLoading,
  error,
  onRemove,
  onSelectUserContact,
}) => {
  if (isLoading) {
    return <Spiner />;
  }

  if (error) {
    return <CommonStyled.ErrorMessageBox>{error}</CommonStyled.ErrorMessageBox>;
  }

  return (
    <>
      {userContacts?.map((contact) => (
        <Styled.ContactCart key={contact.login.uuid}>
          <div className="image-box">
            <img src={contact.picture.thumbnail} alt="contact thumbnail" />
          </div>{" "}
          <div>
            <div className="contact-name">
              <strong>
                {" "}
                {contact.name.first} {contact.name.last}
              </strong>
            </div>
            <div className="contact-email">{contact.email}</div>
            <CommonStyled.CloseButton
              onClick={() => onRemove(contact.login.uuid)}
            >
              ✖
            </CommonStyled.CloseButton>
            <CommonStyled.FromButton
              isContactListButton={true}
              onClick={() => onSelectUserContact(contact)}
            >
              Change
            </CommonStyled.FromButton>
          </div>
        </Styled.ContactCart>
      ))}
    </>
  );
};

export default List;
