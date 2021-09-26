import React, { Component } from "react";
import { Link } from "react-router-dom";

import { search } from "./BooksAPI";
import Book from "./Book";

class SearchPage extends Component {
  state = {
    books: [],
    query: "",
  };

  updateQuery = (query) => {
    query !== ""
      ? search(query.trim().toLocaleLowerCase()).then((books) =>
          books && books.length > 0
            ? this.setState(() => ({
                books: books.map((book) => {
                  if (!("shelf" in book)) {
                    book.shelf = "none";
                  }

                  if (this.props.books.some((b) => b.id === book.id)) {
                    book.shelf = this.props.books.filter(
                      (b) => b.id === book.id
                    )[0].shelf;
                  }
                  return book;
                }),
              }))
            : this.setState({ books: [] })
        )
      : this.setState({ books: [] });
  };

  render() {
    const { books } = this.state;
    const { onShelfChange } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={(e) => this.updateQuery(e.target.value)}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books && books.length > 0 && !("error" in books) ? (
              books.map((book) => (
                <li key={book.id}>
                  <Book onShelfChange={onShelfChange} book={book} />
                </li>
              ))
            ) : (
              <h1>Nothing to show yet!</h1>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
