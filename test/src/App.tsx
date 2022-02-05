import React, { useEffect,useState } from "react";
import { Header } from "./components/Header";
import { api } from "./server/api";
import { apiBooks } from "./server/apiBooks";
import { GlobalStyle } from "./style/global";
import { MyBooksProvider } from "./hook";
import { Main } from "./components/Main";
import {BookModal} from './components/BookModal'

function App() {
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal() {
    setOpenModal(true);
  }
  function handleCloseModal() {
    setOpenModal(false);
  }
  
 

  return (
    <MyBooksProvider>
      <GlobalStyle />
      <Header handleOpenModal={handleOpenModal}/>
      <BookModal isOpen={openModal} isClose={handleCloseModal} />
      <Main />
    </MyBooksProvider>
  );
}

export default App;
