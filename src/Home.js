import React from "react";
import "./App.css";
import Bookshelf from "./Bookshelf";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

class Home extends React.Component {


  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
        </div>
        <Bookshelf books={this.props.books} updateBookshelf={this.props.updateBookshelf} />
        <div className="open-search">
          <Link to="/Search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Home;

Home.propTypes = {
   books: PropTypes.array.isRequired,
   updateBookshelf : PropTypes.func.isRequired,
};