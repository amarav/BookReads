import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ListBook from "./ListBook";

class Search extends Component {
  state = {
    query: "",
    searchBooks: [],
  };

 updateShelf = (mybook, myshelf) => {   
  this.setState(({ searchBooks }) => ({
    searchBooks: searchBooks.map((book) =>
      book.id === mybook.id ? { ...book, shelf : myshelf } : book
    ),
  }));
  this.props.updateBookshelf(mybook, myshelf);
};

  updateQuery = (query) => {
    this.setState({query});    
    if (query.length === 0) {
      this.setState({ searchBooks: [] });
    } 
    else if (query.trim()) {
      BooksAPI.search(query.trim()).then((response) => {
        if (response.error !== "empty query") {
          const searchedBooks = response.map((book) => {
          const mybook =  this.props.books.find( shelfbook => {        
                                                     (shelfbook.id === book.id) ?  shelfbook :  book})
                         
            //this.updateShelf(book,shelf)
            return book;
          });           
          
          
          this.setState(() => ({
            searchBooks: [...searchedBooks],
          }));
        } 
        else {
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
              {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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
