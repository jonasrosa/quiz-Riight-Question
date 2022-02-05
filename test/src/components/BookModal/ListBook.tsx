import React, { useState } from "react";
import { ListContainer } from "./styles";
import starIcon from "../../assets/star.svg";
import deleteIcon from "../../assets/delete.svg";


interface ListBookProps {
  title: string;
  like: boolean;
}
export const ListBook = ({ title, like }: ListBookProps) => {
    const[check, setCheck]=useState(true)
    

  return (
    <ListContainer>
        
      <div>
        <input type="checkbox" onClick={()=> setCheck(check?!check:true)}/>

        <h4>{title}</h4>
      </div>
      {check ? (
        <button>
          <img src={starIcon} />
        </button>
      ) : (
        <button>
          <img src={deleteIcon} />
        </button>
      )}
    </ListContainer>
  );
};
