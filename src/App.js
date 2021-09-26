import React from "react";
import { Route } from "react-router-dom";

import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Books from "./Books";
import SearchPage from "./SearchPage";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }

  onShelfChange = (targetedBook, newShelf) => {
    BooksAPI.update(targetedBook, newShelf);

    targetedBook.shelf = newShelf;

    this.setState(() => ({
      books: [
        ...this.state.books.filter((book) => book.id !== targetedBook.id),
        targetedBook,
      ],
    }));
  };

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <Books onShelfChange={this.onShelfChange} books={books} />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <SearchPage onShelfChange={this.onShelfChange} books={books} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
