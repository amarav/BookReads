import React from 'react'
import './App.css'
import Home from './Home'
import Search from './Search'
import { BrowserRouter,Switch, Route,  } from "react-router-dom";

class BooksApp extends React.Component {
  render() {
    return (    
     <BrowserRouter>
      <Switch>
       <Route exact path='/' component={Home} />     
       <Route exact path='/Search' component={Search} />           
      </Switch>       
     </BrowserRouter>
    )
  }
}

export default BooksApp
