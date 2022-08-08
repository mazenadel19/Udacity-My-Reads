import { useState } from "react";

import SearchPage from "./pages/SearchPage/SearchPage";
import MainPage from "./pages/MainPage/MainPage";
import "./App.css";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage
          setShowSearchpage={setShowSearchpage}
          showSearchPage={showSearchPage}
        />
      ) : (
        <MainPage
          setShowSearchpage={setShowSearchpage}
          showSearchPage={showSearchPage}
        />
      )}
    </div>
  );
}

export default App;
