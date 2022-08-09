import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as API from "../../BooksAPI";
import obiwan from "../../images/obiwan.jpg";

import BooksGrid from "../../components/BookGrid/BookGrid";
import "./SearchPage.css";

function SearchPage({ onShelfChange }) {
  const [searchedResults, setSearchedResults] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (inputValue.trim()) {
      const findBooks = async () => {
        setIsSearching(true);
        const data = await API.search(inputValue);
        if (data.error) {
          setIsError(true);
        } else {
          setIsError(false);
          setSearchedResults(data);
        }
        setIsSearching(false);
      };

      const timer = setTimeout(() => {
        findBooks();
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [inputValue]);

  const output = isError ? (
    <img src={obiwan} alt="couldn't find your book" />
  ) : (
    <BooksGrid books={searchedResults} onShelfChange={onShelfChange} />
  );

  const search = isSearching ? <h1>Searching ... 🧐🧐</h1> : output;

  const input = inputValue ? search : <h1>Type something here ☝️</h1>;

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">{input}</div>
    </div>
  );
}
export default SearchPage;
