import React, { Component } from "react";
import PropTypes from "prop-types";

class ListBook extends Component {
  state = {
    shelf: "",
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ shelf: event.target.value });
    this.props.updateBookshelf(this.props.book, event.target.value);
  }

  render() {
    const { book } = this.props;
    return (
      <div>
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${
                    book.imageLinks && book.imageLinks.smallThumbnail
                  })`,
                }}
              ></div>
              <div className="book-shelf-changer">
                <select value={book.shelf} onChange={this.handleChange}>
                  >
                  <option value="move" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
        </li>
      </div>
    );
  }
}

export default ListBook;

ListBook.propTypes = {
  book: PropTypes.object.isRequired,
  updateBookshelf: PropTypes.func.isRequired,
};
