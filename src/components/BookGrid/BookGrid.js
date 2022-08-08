import React from "react";
import Book from "../Book/Book";

import "./BookGrid.css";

function BookGrid({ books }) {
  return (
    <ol className="books-grid">
      {books.map(({ shelf, author, title, imageLinks, id }) => (
        <li key={id}>
          <Book
            title={title}
            author={author}
            image={imageLinks.thumbnail}
            shelf={shelf}
          />
        </li>
      ))}
    </ol>
  );
}

export default BookGrid;
