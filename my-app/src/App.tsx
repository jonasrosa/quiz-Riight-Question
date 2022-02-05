import React, { useEffect } from "react";
import { Header } from "./components/Header";
import { api } from "./server/api";
import { apiBooks } from "./server/apiBooks";
import { GlobalStyle } from "./style/global";
import { MyBooksProvider } from "./hook";
import { Main } from "./components/Main";

function App() {
  
 

  return (
    <MyBooksProvider>
      <GlobalStyle />
      <Header />
      <Main />
    </MyBooksProvider>
  );
}

export default App;
