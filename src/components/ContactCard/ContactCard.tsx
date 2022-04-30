import { FC, memo } from "react";
import { IUserContact } from "../../types/types";
import * as Styled from "./styles";
import * as CommonStyled from "../../common styles/styles";

interface IContactCard {
  contact: IUserContact;
  onRemove: (contact: string) => void;
  onSelectUserContact: (userContact: IUserContact) => void;
}

const ContactCardInner: FC<IContactCard> = ({
  contact,
  onRemove,
  onSelectUserContact,
}) => {
  return (
    <Styled.ContactCard key={contact.login.uuid}>
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
        <CommonStyled.CloseButton onClick={() => onRemove(contact.login.uuid)}>
          ✖
        </CommonStyled.CloseButton>
        <CommonStyled.FromButton
          isContactListButton={true}
          onClick={() => onSelectUserContact(contact)}
        >
          Change
        </CommonStyled.FromButton>
      </div>
    </Styled.ContactCard>
  );
};

export const ContactCard = memo(ContactCardInner);
