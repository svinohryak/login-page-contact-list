import { FC, useRef, useState } from "react";
import ReactDom from "react-dom";
import { IUserContact } from "../../types/types";
import * as Styled from "./styles";

const modalElement = document.getElementById("modal") as Element;

interface IModalProps {
  onClose: () => void;
  //   onChangeInput: (
  //     event: React.ChangeEvent<HTMLInputElement>,
  //     state: (value: string) => void
  //   ) => void;
  //   onSubmit: (name: string[]) => void;
  targetUser: IUserContact;
}

const Modal: FC<IModalProps> = ({ onClose, targetUser }) => {
  const modalRef = useRef(null);
  const [firstName, setFirstName] = useState(targetUser.name.first);
  const [lastName, setLastName] = useState(targetUser.name.last);

  const outsideClose = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (modalRef.current === event.target) {
      onClose();
    }
  };

  return modalElement
    ? ReactDom.createPortal(
        <Styled.ModalLayout ref={modalRef}>
          <Styled.ModalBox>
            <h3>Change name</h3>
            <Styled.CloseButton onClick={() => outsideClose}>
              ❌
            </Styled.CloseButton>
            <form>
              <div>
                <label>First name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(event) => onChangeInput(event, setFirstName)}
                />
              </div>
              <div>
                <label>Last name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(event) => onChangeInput(event, setLastName)}
                />
              </div>
              <button onClick={() => onSubmit([firstName, lastName])}>
                Submit
              </button>
            </form>
          </Styled.ModalBox>
        </Styled.ModalLayout>,
        modalElement
      )
    : null;
};

export default Modal;
