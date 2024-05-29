import "../styles/Modal.css";
import { createPortal } from "react-dom";

type ModalProps = {
  modalText: string;
  visible: boolean;
};

export default function Modal({ modalText, visible }: ModalProps) {
  return createPortal(
    <div className={`modal ${visible ? "modal--visible" : ""}`}>{modalText}</div>,
    document.getElementById("root") || document.body
  );
}
