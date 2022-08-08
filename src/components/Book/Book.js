import BookShelfChanger from "../BookShelfChanger/BookShelfChanger";
import React from "react";
import "./Book.css";

function Book({ title, author, image, shelf }) {

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <BookShelfChanger shelf={shelf} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
    </div>
  );
}

export default Book;
