import BookShelf from "../../components/BookShelf/BookShelf";
import "./MainPage.css";

function MainPage({ setShowSearchpage, showSearchPage, bookShelves }) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf title={"Currently Reading"} books={[]} />
          <BookShelf title={"Want to Read"} books={[]} />
          <BookShelf title={"Read"} books={[]} />
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
