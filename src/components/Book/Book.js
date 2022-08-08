import BookShelfChanger from "../BookShelfChanger/BookShelfChanger";
import React from "react";
import "./Book.css";

function Book({ title, author, image, state }) {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: image,
          }}
        ></div>
        <BookShelfChanger state={state} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
    </div>
  );
}

export default Book;
