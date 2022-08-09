import { useEffect, useRef, useState } from "react";
import * as API from "./BooksAPI";
import { Route, Routes } from "react-router-dom";

import SearchPage from "./pages/SearchPage/SearchPage";
import MainPage from "./pages/MainPage/MainPage";
import "./App.css";
import Page404 from "./pages/Page404/Page404";

function App() {
  const [myBooks, setMyBooks] = useState([]);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;

      const getBooks = async () => {
        const data = await API.getAll();
        setMyBooks(data);
      };

      getBooks();
    }
  }, []);

  function onShelfChange(data) {
    setMyBooks(data);
  }

  return (
    <Routes>
      <Route
        element={<SearchPage onShelfChange={onShelfChange} books={myBooks}/>}
        path={"/search"}
      />
      <Route
        element={<MainPage books={myBooks} onShelfChange={onShelfChange} />}
        path={"/"}
      />
      <Route element={<Page404 />} path={"*"} />
    </Routes>
  );
}

export default App;
