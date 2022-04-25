import { FC, useRef, useState } from "react";
import ReactDom from "react-dom";
import { IName } from "../../types/types";
import * as Styled from "./styles";
import * as CommonStyled from "../../common styles/styles";

const modalElement = document.getElementById("modal") as Element;

interface IModalProps {
  onClose: () => void;
  onChangeInput: (
    event: React.ChangeEvent<HTMLInputElement>,
    state: (value: string) => void
  ) => void;
  onSubmit: (name: string[]) => void;
  targetUserName: IName;
}

const Modal: FC<IModalProps> = ({
  onClose,
  onSubmit,
  targetUserName,
  onChangeInput,
}) => {
  const modalRef = useRef(null);
  const [firstName, setFirstName] = useState(targetUserName.first);
  const [lastName, setLastName] = useState(targetUserName.last);

  const outsideClose = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (modalRef.current === event.target) {
      onClose();
    }
  };

  return modalElement
    ? ReactDom.createPortal(
        <Styled.ModalLayout ref={modalRef} onClick={outsideClose}>
          <CommonStyled.Form isModal={true}>
            <h1>Change name</h1>
            <CommonStyled.CloseButton onClick={onClose}>
              ✖
            </CommonStyled.CloseButton>
            <form>
              <div>
                <label>First name</label>
                <CommonStyled.Input
                  type="text"
                  value={firstName}
                  onChange={(event) => onChangeInput(event, setFirstName)}
                />
              </div>
              <div>
                <label>Last name</label>
                <CommonStyled.Input
                  type="text"
                  value={lastName}
                  onChange={(event) => onChangeInput(event, setLastName)}
                />
              </div>
              <CommonStyled.FromButton
                onClick={() => onSubmit([firstName, lastName])}
              >
                Submit
              </CommonStyled.FromButton>
            </form>
          </CommonStyled.Form>
        </Styled.ModalLayout>,
        modalElement
      )
    : null;
};

export default Modal;
