import { title } from "process";
import React, {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from "react";
import { text } from "stream/consumers";
import { Product, DetailOfTheBooks } from "../model/product";
import { Mybook } from "../model/myBook";
import { api, } from "../server/api";
import {apiBooks} from "../server/apiBooks"
import { error } from "console";

interface MyBooksContextProps {
  product: Product[];
  filterBook :(bookId: string)=> void;
  showBook?:Product;
  addNewBook:(title:string)=>void;
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
  const [myBooks, setMyBooks]= useState<Mybook>()
  

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

  
   async function addNewBook(title:string){

    apiBooks.post('/books',{title:"oi", favorite:true})
    .then(response=> console.log(response.data))
  }
 

  return (
    <MyBooksContext.Provider value={{ product, filterBook, showBook, addNewBook }}>
      {children}
    </MyBooksContext.Provider>
  );
};
function useBooks(): MyBooksContextProps {
  const context = useContext(MyBooksContext);

  return context;
}
export { MyBooksProvider, MyBooksContext, useBooks };
