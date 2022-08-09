import React from "react";
import Book from "../Book/Book";

import "./BookGrid.css";

function BookGrid({ books, onShelfChange }) {
  return (
    <ol className="books-grid">
      {books.map((book) => (
        <li key={book.id}>
          <Book book={book} onShelfChange={onShelfChange} />
        </li>
      ))}
    </ol>
  );
}

export default BookGrid;
