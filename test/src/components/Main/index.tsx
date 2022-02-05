import React, { useState } from "react";
import { Card } from "../Card";
import { useBooks } from "../../hook";
import { MainContainer, Context } from "./styles";
import { BookModal } from "../BookModal";

export const Main = () => {
  const { product, showBook } = useBooks();
  const showProduct = [...product];
 

  return (
    <MainContainer>
      <Context>
        

        <ul>
          {!showBook ? (
            showProduct.map((book) => {
              return (
                <div key={book.id}>
                  <Card
                    image={book.volumeInfo.imageLinks.smallThumbnail}
                    title={book.volumeInfo.title}
                    
                  />
                </div>
              );
            })
          ) : (
            <div key={showBook.id}>
              <Card
                image={showBook.volumeInfo.imageLinks.smallThumbnail}
                title={showBook.volumeInfo.title}
               
              />
            </div>
          )}
        </ul>
      </Context>
    </MainContainer>
  );
};
