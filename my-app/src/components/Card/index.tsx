import React from "react";
import {DetailOfTheBooks } from '../../model/product'
interface CardProps{
   bookData: DetailOfTheBooks
}

export const Card=({bookData}:CardProps)=>{
    console.log(bookData)

    return(
        <>
        <img/>
        </>
    )
}