import React from "react";
import { HeaderContainer, HeaderContext } from "./styles";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import { useBooks } from "../../hook";

export const Header = () => {
  const { filterBook } = useBooks();

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
        <div></div>
      </HeaderContext>
    </HeaderContainer>
  );
};
