import BookShelfChanger from "../BookShelfChanger/BookShelfChanger";
import React from "react";
import "./Book.css";

function Book({ book, onShelfChange }) {
  const { shelf, author, title, imageLinks } = book;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              imageLinks?.thumbnail || imageLinks?.smallThumbnail
            })`,
          }}
        ></div>
        <BookShelfChanger
          shelf={shelf}
          book={book}
          onShelfChange={onShelfChange}
        />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
    </div>
  );
}

export default Book;
