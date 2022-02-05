import { title } from "process";
import React, {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from "react";

import { Product} from "../model/product";
import { Mybook } from "../model/myBook";
import { api, } from "../server/api";
import {apiBooks} from "../server/apiBooks"
import { error } from "console";

interface MyBooksContextProps {
  product: Product[];
  filterBook :(bookId: string)=> void;
  showBook?:Product;
  addNewBook:(title:string,favorite:boolean)=>void;
  deleteBook:(bookId:number)=>void;
}

interface MyBooksProviderProps {
  children: ReactNode;
}

const MyBooksContext = createContext<MyBooksContextProps>(
  {} as MyBooksContextProps
);

const MyBooksProvider = ({ children }: MyBooksProviderProps) => {
  const [product, setProduct] = useState<Product[]>([]);
  const [showBook, setShowBook]= useState<Product>(  )
  

  useEffect(() => {
    api.get("/items").then((response) => setProduct(response.data.items));
  }, []);

  function filterBook (title: string) {
      const updateProduct =[...product]

      const productExist= updateProduct.filter((book)=>
      book.volumeInfo.title.includes( title))
       if(productExist.length === 1){
         productExist.map((book)=> setShowBook( book))  
      }
  }

  {/* function backend*/}
 
   function addNewBook(title:string,favorite:boolean){

     apiBooks.post('/books',{title:title, favorite:favorite})
    .then(response=> console.log(response.data))

  }
  function deleteBook(bookId:number){

    apiBooks.delete(`/books/${bookId}`)

  }
 

  return (
    <MyBooksContext.Provider value={{ product, filterBook, showBook, addNewBook,deleteBook }}>
      {children}
    </MyBooksContext.Provider>
  );
};
function useBooks(): MyBooksContextProps {
  const context = useContext(MyBooksContext);

  return context;
}
export { MyBooksProvider, MyBooksContext, useBooks };
