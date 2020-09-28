import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Bookshelf from "./Bookshelf";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.updateBookshelf = this.updateBookshelf.bind(this);
  }
  state = {
    books: [],
  };

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState({ books: books });
    });
  };

  updateBookshelf(updatedbook,shelf) {  
    BooksAPI.update(updatedbook,shelf).then(
         this.setState((currentState) => ({
              books: currentState.books.filter((book) => {
              return book.id !== updatedbook.id;
            })
            .concat({ ...updatedbook, shelf }),
       }))
    );  
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
        </div>
        <Bookshelf books={this.state.books} updateBookshelf={this.updateBookshelf} />
        <div className="open-search">
          <Link to="/Search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Home;
