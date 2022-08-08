import { useEffect, useRef, useState } from "react";
import * as API from "./BooksAPI";

import SearchPage from "./pages/SearchPage/SearchPage";
import MainPage from "./pages/MainPage/MainPage";
import "./App.css";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
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

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage
          setShowSearchpage={setShowSearchpage}
          showSearchPage={showSearchPage}
          searchedBooks={[]}
        />
      ) : (
        <MainPage
          setShowSearchpage={setShowSearchpage}
          showSearchPage={showSearchPage}
          books={myBooks}
        />
      )}
    </div>
  );
}

export default App;
