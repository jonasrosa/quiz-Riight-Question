import React from "react";
import { HeaderContainer, HeaderContext } from "./styles";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg"

export const Header = () => {
    
  return (
    <HeaderContainer>
      <HeaderContext>
        <div>
          <img src={logo} />
        </div>
        <div className="boxInput">
            <img src={search}/>
            <input placeholder="Busque por titulo"/>
        </div>
        <div>

        </div>
      </HeaderContext>
    </HeaderContainer>
  );
};
