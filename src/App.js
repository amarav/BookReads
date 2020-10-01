import React from 'react'
import './App.css'
import Home from './Home'
import Search from './Search'
import * as BooksAPI from "./BooksAPI";
import { BrowserRouter,Switch, Route, Redirect } from "react-router-dom";

class BooksApp extends React.Component {  
  
  constructor(props) {
    super(props);
    this.updateBookshelf = this.updateBookshelf.bind(this);
  }

  
  state = {
    books: [],
  };
 
 MainPage = () => {
  return (
    <Home books={this.state.books} updateBookshelf={this.updateBookshelf}/>
  )
}

 SearchPage = () => {
  return (
    <Search  books={this.state.books} updateBookshelf={this.updateBookshelf}/>
  )
}

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
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
     <BrowserRouter>
      <Switch>
       <Route exact path='/' render={this.MainPage}  />     
       <Route exact path='/Search' render={this.SearchPage} />   
       <Redirect to="/" />
      </Switch>       
     </BrowserRouter>
    )
  }
}

export default BooksApp
