import React, { useState } from 'react'
import { Card } from '../Card'
import {useBooks} from '../../hook'
import {Product,DetailOfTheBooks } from '../../model/product'



export const Main=()=>{
    /*const {books}=useBooks()
    const [detail,setDetail]=useState<DetailOfTheBooks[]>()  
    const NewData=[...books]
       NewData.map((data)=>{
           setDetail(data.volumeInfo)
       })
       console.log(detail)*/
    return(
        <ul className=''>
            
                 <li >
                    <img src="http://books.google.com/books/content?id=is06DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" alt="" />
                 </li>
     
               
        
        </ul>
    )
}