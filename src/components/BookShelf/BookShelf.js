import React from "react";
import BookGrid from "../BookGrid/BookGrid";

import "./BookShelf.css";

function BookShelf({ title, books, onShelfChange }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BookGrid books={books} onShelfChange={onShelfChange} />
      </div>
    </div>
  );
}

export default BookShelf;
