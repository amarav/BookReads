import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Bookshelf from "./Bookshelf";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = {
    books: [],
  };

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState({ books: books });
    });
  };

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
        </div>
        <Bookshelf books={this.state.books} />
        <div className="open-search">
          <Link to="/Search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Home;
