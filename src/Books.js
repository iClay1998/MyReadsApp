import React, { Component } from "react";

import { Link } from "react-router-dom";

import BookShelf from "./BookShelf";

class Books extends Component {
  render() {
    const { books, onShelfChange } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              title="Currently Reading"
              onShelfChange={onShelfChange}
              books={books.filter((book) => book.shelf === "currentlyReading")}
            />
            <BookShelf
              title="Want to read"
              onShelfChange={onShelfChange}
              books={books.filter((book) => book.shelf === "wantToRead")}
            />
            <BookShelf
              title="Read"
              onShelfChange={onShelfChange}
              books={books.filter((book) => book.shelf === "read")}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Books;
