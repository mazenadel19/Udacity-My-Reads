import React from "react";
import "./BookShelfChanger.css";

function BookShelfChanger({ shelf }) {
  return (
    <div className="book-shelf-changer">
      <select defaultValue={shelf}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default BookShelfChanger;
