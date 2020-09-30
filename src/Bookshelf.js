import React,{Component} from 'react'
import PropTypes from 'prop-types'
import DisplayBooks from './DisplayBooks'

const SHELVES = [
  {
    title: 'Currently Reading',
    id: 'currentlyReading'
  },
  {
    title: 'Want To Read',
    id: 'wantToRead'
  },
  {
    title: 'Read',
    id: 'read'
  }
];

class Bookshelf  extends Component{
 
  
  render()
  {
    const {books} = this.props;
    return(
    <div>      
      {SHELVES.map(shelf => (
          <DisplayBooks key={shelf.id} books={books} shelf={shelf.id} title={shelf.title} updateBookshelf={this.props.updateBookshelf}/>
        )
       )}
    </div>
    );
  }
}

export default Bookshelf

Bookshelf.proptypes =  {
  books: PropTypes.array.isRequired,  
  updateBookshelf : PropTypes.func.isRequired,
}