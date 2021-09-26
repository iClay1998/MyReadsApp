import React from "react";

const HandleShelfChange = (props) => {
  return (
    <select
      onChange={(e) => props.onShelfChange(props.book, e.target.value)}
      value={
        !("shelf" in props.book)
          ? (props.book.shelf = "none")
          : props.book.shelf
      }
    >
      <option value="move" disabled>
        Move to...
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  );
};

export default HandleShelfChange;
