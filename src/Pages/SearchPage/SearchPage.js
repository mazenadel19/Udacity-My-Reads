import "./SearchPage.css";

function SearchPage({ setShowSearchpage, showSearchPage }) {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a
          href="/"
          className="close-search"
          onClick={() => setShowSearchpage(!showSearchPage)}
        >
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  );
}
export default SearchPage;
