import "../styles/Modal.css";
import { createPortal } from "react-dom";

type ModalProps = {
  children: React.ReactNode;
  visible: boolean;
};

export default function Modal({ children, visible }: ModalProps) {
  return createPortal(<div className={`modal ${visible ? "modal--visible" : ""}`}>{children}</div>, document.body);
}
