import { FC } from "react";
import { IUserContact } from "../../types/types";
import Spiner from "../Spiner/Spiner";
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
    return <h2>{error}</h2>;
  }

  return (
    <div>
      {userContacts?.map((contact) => (
        <div key={contact.login.uuid}>
          <div>
            <img src={contact.picture.thumbnail} alt="" />
          </div>{" "}
          <div style={{ textAlign: "left" }}>
            {contact.name.first} {contact.name.last} <br /> {contact.email}{" "}
            <br />
            <button onClick={() => onRemove(contact.login.uuid)}>Delete</button>
            <button onClick={() => onSelectUserContact(contact)}>Change</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
