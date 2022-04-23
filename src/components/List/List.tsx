import { FC } from "react";
import { IUserContact } from "../../types/types";
import Spiner from "../Spiner/Spiner";
// import * as Styled from "./styles";

interface IListProps {
  userContacts: IUserContact[];
  onRemove: (contact: string) => void;
  isLoading: boolean;
  onSelectUserContact: (userContact: IUserContact) => void;
}

const List: FC<IListProps> = ({
  userContacts,
  isLoading,
  onRemove,
  onSelectUserContact,
}) => {
  if (isLoading) {
    return <Spiner />;
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
            {/* <button onClick={() => {}}>Delete</button> */}
            <button
              onClick={() => {
                console.log(contact.login.uuid);
              }}
            >
              Change
            </button>
            <button onClick={() => onSelectUserContact(contact)}>Change</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
