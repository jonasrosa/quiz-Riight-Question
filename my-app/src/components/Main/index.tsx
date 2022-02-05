import React, { useState } from "react";
import { Card } from "../Card";
import { useBooks } from "../../hook";
import { MainContainer, Context } from "./styles";
import { BookModal } from "../BookModal";

export const Main = () => {
  const { product, showBook } = useBooks();
  const showProduct = [...product];
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal() {
    setOpenModal(true);
  }
  function handleCloseModal() {
    setOpenModal(false);
  }

  return (
    <MainContainer>
      <Context>
        <BookModal isOpen={openModal} isClose={handleCloseModal} />

        <ul>
          {!showBook ? (
            showProduct.map((book) => {
              return (
                <div key={book.id}>
                  <Card
                    image={book.volumeInfo.imageLinks.smallThumbnail}
                    title={book.volumeInfo.title}
                    handleOpenModal={handleOpenModal}
                  />
                </div>
              );
            })
          ) : (
            <div key={showBook.id}>
              <Card
                image={showBook.volumeInfo.imageLinks.smallThumbnail}
                title={showBook.volumeInfo.title}
                handleOpenModal={handleOpenModal}
              />
            </div>
          )}
        </ul>
      </Context>
    </MainContainer>
  );
};
