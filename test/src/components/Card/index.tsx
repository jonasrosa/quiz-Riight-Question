import React, { useState } from "react";
import { useBooks } from "../../hook";
import { CardContainer, GridCard } from "./styles";
import addIcon from '../../assets/add.svg'
import likeUp from '../../assets/likeUp.svg';
import likeDown from '../../assets/likeDown.svg';
interface CardProps {
  image: string;
  title: string;
  
}

export const Card = ({ image, title }: CardProps) => {
  const { addNewBook } = useBooks();

  function handlerOnClick(favorite:boolean) {
    addNewBook(title,favorite);
  }

  return (
    <CardContainer>
      <GridCard>
        <img src={image} className="imageBook" />
        <div className="boxText">
          <h4>{title}</h4>
          <p></p>
        </div>
        <div className="boxButton">
          <button className="like" onClick={() => handlerOnClick(true)}>
            <img src={likeUp}/>
          </button>
          <button onClick={() => handlerOnClick(false)}>
            <img src={likeDown}/>
          </button>
        </div>
      </GridCard>
    </CardContainer>
  );
};
