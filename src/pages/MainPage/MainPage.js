import BookShelf from "../../components/BookShelf/BookShelf";
import "./MainPage.css";

function MainPage({ setShowSearchpage, showSearchPage, books }) {
  const Reading = books.filter((book) => book.shelf === "currentlyReading");
  const toRead = books.filter((book) => book.shelf === "wantToRead");
  const Read = books.filter((book) => book.shelf === "read");
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf title={"Currently Reading"} books={Reading} />
          <BookShelf title={"Want to Read"} books={toRead} />
          <BookShelf title={"Read"} books={Read} />
        </div>
      </div>
      <div className="open-search">
        <a href="/#" onClick={() => setShowSearchpage(!showSearchPage)}>
          Add a book
        </a>
      </div>
    </div>
  );
}
export default MainPage;
