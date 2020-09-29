import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListBook from './ListBook'

class DisplayBooks extends Component {
  
  
  render() {
    const { books, title, shelf } = this.props;
    return (
      <div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books
                    .filter((book) => book.shelf === shelf)
                    .map((book) => (
                      <ListBook key={book.id} book={book} updateBookshelf={this.props.updateBookshelf} />
                     ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayBooks;

DisplayBooks.propTypes = {
  books: PropTypes.array.isRequired,
};
