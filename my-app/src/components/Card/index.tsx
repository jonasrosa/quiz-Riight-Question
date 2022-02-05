import React, { useState } from "react";

import { useBooks } from "../../hook";

import {CardContainer,GridCard} from './styles'
interface CardProps{
   image:string
   title:string
   handleOpenModal: () => void;
      
}

export const Card=({image,title,handleOpenModal}:CardProps)=>{
    const{addNewBook} = useBooks()
    
    function handlerOnClick(){
        handleOpenModal()
        addNewBook(title)
    }
    

    return(
        <CardContainer>
            
            <GridCard>
            <img src={image} className="imageBook"/>
            <div className="boxText">

            <h4>{title}</h4>
            <p></p>
            </div>
            <div className="boxButton">
                <button onClick={()=> handlerOnClick()}>
                    
                </button>
                
            </div>

            </GridCard>

        </CardContainer>
        
    )
}