import React, {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from "react";
import { Product } from "../model/product";
import { api } from "../server/api";

interface MyBooksContextProps {
  books: Product[];
}

interface MyBooksProviderProps {
  children: ReactNode;
}

const MyBooksContext = createContext<MyBooksContextProps>(
  {} as MyBooksContextProps
);

const MyBooksProvider = ({ children }: MyBooksProviderProps) => {
  const [books, setBooks] = useState<Product[]>([]);

  useEffect(() => {
    api.get("/").then((response) => setBooks(response.data.items));
  }, []);
  console.log(books)
  

  return (
    <MyBooksContext.Provider value={{ books }}>
      {children}
    </MyBooksContext.Provider>
  );
};
function useBooks(): MyBooksContextProps {
  const context = useContext(MyBooksContext);

  return context;
}
export { MyBooksProvider, MyBooksContext,useBooks };
