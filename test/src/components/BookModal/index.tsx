import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import closeIcon from "../../assets/close.svg";
import { Container } from "./styles";
import { apiBooks } from "../../server/apiBooks";
import { Mybook } from "../../model/myBook";
import { ListBook } from "./ListBook";
interface ModalProps {
  isOpen: boolean;
  isClose: () => void;
}

export const BookModal = ({ isOpen, isClose }: ModalProps) => {
  const [favoriteBooks, setFavoriteBooks] = useState<Mybook[]>([]);

  useEffect(() => {
    apiBooks.get("/books").then((response) => setFavoriteBooks(response.data));
  }, [favoriteBooks]);

  const listFavoriteBooks = [...favoriteBooks];
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={"react-modal-overlay"}
      ariaHideApp={false}
      className="react-modal-content"
    >
      <Container>
        <button onClick={isClose}>
          <img src={closeIcon} />
        </button>
        <ul>
          {listFavoriteBooks.map((favoriteBook) => {
            if(favoriteBook.favorite == true){
              return (
                <>
                  <ListBook
                    title={favoriteBook.title}
                    like={favoriteBook.favorite}
                  />
                </>
              );

            }
          })}
        </ul>
      </Container>
    </Modal>
  );
};
