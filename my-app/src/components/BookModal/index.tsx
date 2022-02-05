import Modal from "react-modal";
import closeIcon from "../../assets/close.svg";
import {Container} from './styles'
interface ModalProps {
  isOpen: boolean;
  isClose: () => void;
}

export const BookModal = ({ isOpen, isClose }: ModalProps) => {
    const filterBookFavorite=[]
  return (
    <Modal
      isOpen={true}
      overlayClassName={"react-modal-overlay"}
      ariaHideApp={false}
      className="react-modal-content"
    >
      <button onClick={isClose}>
        <img src={closeIcon} />
      </button>
      <Container>
          <ul>
              <li>

              </li>
          </ul>

      </Container>
    </Modal>
  );
};
