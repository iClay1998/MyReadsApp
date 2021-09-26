import React, { Component } from "react";
import HandleShelfChange from "./handleShelfChange";
// import PropTypes from "prop-types";

class Book extends Component {
  static propTypes = {};

  render() {
    const { book, onShelfChange } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${book.imageLinks &&
                book.imageLinks.smallThumbnail}")`,
            }}
          />
          <div className="book-shelf-changer">
            <HandleShelfChange onShelfChange={onShelfChange} book={book} />
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors &&
            book.authors.map((author, index) => (
              <div key={index}>{author}</div>
            ))}
        </div>
      </div>
    );
  }
}

export default Book;
