import { FC } from "react";
import { IUserContact } from "../../types/types";
import Spiner from "../Spiner/Spiner";
import { ContactCard } from "../ContactCard/ContactCard";
import * as CommonStyled from "../../common styles/styles";

interface IListProps {
  error: string;
  isLoading: boolean;
  userContacts: IUserContact[];
  onRemove: (contact: string) => void;
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
        <ContactCard
          contact={contact}
          onRemove={onRemove}
          onSelectUserContact={onSelectUserContact}
        />
      ))}
    </>
  );
};

export default List;
