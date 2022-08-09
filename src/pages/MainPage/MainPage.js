import { Link } from "react-router-dom";

import BookShelf from "../../components/BookShelf/BookShelf";
import Header from "../../components/Header/Header";
import "./MainPage.css";

function MainPage({ books, onShelfChange }) {
  const Reading = books.filter((book) => book.shelf === "currentlyReading");
  const toRead = books.filter((book) => book.shelf === "wantToRead");
  const Read = books.filter((book) => book.shelf === "read");
  return (
    <div className="list-books">
      <Header />
      <div className="list-books-content">
        <div>
          <BookShelf
            title={"Currently Reading"}
            books={Reading}
            onShelfChange={onShelfChange}
          />
          <BookShelf
            title={"Want to Read"}
            books={toRead}
            onShelfChange={onShelfChange}
          />
          <BookShelf
            title={"Read"}
            books={Read}
            onShelfChange={onShelfChange}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}
export default MainPage;
