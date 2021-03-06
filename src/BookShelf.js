import React, { Component } from "react";

// import PropTypes from "prop-types";

import Book from "./Book.js";

class BookShelf extends Component {
  render() {
    const { title, books, onShelfChange } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book onShelfChange={onShelfChange} book={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
