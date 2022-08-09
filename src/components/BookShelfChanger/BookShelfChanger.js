import React from "react";
import * as API from "../../BooksAPI";

import "./BookShelfChanger.css";

function BookShelfChanger({ book, shelf = "none", onShelfChange }) {
  function handleShelfChange(e) {
    const updateBook = async () => {
      await API.update(book, e.target.value);
      const data = await API.getAll();
      onShelfChange(data);
    };
    updateBook();
  }

  return (
    <div className="book-shelf-changer">
      <select defaultValue={shelf} onChange={handleShelfChange}>
        <option disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default BookShelfChanger;
