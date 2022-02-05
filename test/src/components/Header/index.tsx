import React from "react";
import { HeaderContainer, HeaderContext } from "./styles";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import { useBooks } from "../../hook";
import star from "../../assets/star.svg";

interface HeaderProps{
  handleOpenModal:()=> void;
}

export const Header = ({handleOpenModal}:HeaderProps) => {
  const { filterBook } = useBooks();
  
  function handleOnclick(){
    handleOpenModal()
  }
  return (
    <HeaderContainer>
      <HeaderContext>
        <div>
          <img src={logo} />
        </div>
        <div className="boxInput">
          <img src={search} />
          <input
            placeholder="Busque por titulo"
            onChange={(e) => filterBook(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleOnclick}>
            <img src={star}/>
          </button>
        </div>
      </HeaderContext>
    </HeaderContainer>
  );
};
