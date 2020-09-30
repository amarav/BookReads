import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ListBook from "./ListBook";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    query: "",
    searchBooks: [],
  };

  updateShelf = (mybook, myshelf) => {
    this.setState(({ searchBooks }) => ({
      searchBooks: searchBooks.map((book) =>
        book.id === mybook.id ? { ...book, shelf: myshelf } : book
      ),
    }));
    this.props.updateBookshelf(mybook, myshelf);
  };

  updateQuery = (query) => {
    this.setState({ query });
    if (query.length === 0) {
      this.setState({ searchBooks: [] });
    } else if (query.trim()) {
      BooksAPI.search(query.trim()).then((response) => {
        if (response.error !== "empty query") {
          const searchedBooks = response.map((book) => {
            const mybook = this.props.books.find(
              (shelfbook) => shelfbook.id === book.id
            );
            const shelf = mybook ? mybook.shelf : "None";
            this.updateShelf(book, shelf);
            return book;
          });

          this.setState(() => ({ searchBooks: [...searchedBooks] }));
        } else {
          this.setState(() => ({
            searchBooks: [],
          }));
        }
      });
    }
  };
  render() {
    const { query } = this.state;

    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div></div>

          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.searchBooks.map((book) => (
                <ListBook
                  key={book.id}
                  book={book}
                  updateBookshelf={this.updateShelf}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;

Search.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookshelf: PropTypes.func.isRequired,
};
