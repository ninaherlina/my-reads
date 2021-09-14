import React from 'react'
import HomePage from './components/HomePage'
import SearchBooks from './components/SearchBooks'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

// import Route component into App.js

class BooksApp extends React.Component {
  // open array inside books variable for list of books
  state = {
    books: []
  }

  // componentDidMount() lifecycle method to make API request
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    }
    )
  }

  // moveShelf method to move a book in between shelves
  //moveShelf = (book, shelf) => {
   // BooksAPI.update(book, shelf)

    // getAll() method from the BooksAPI is run and all the books are downloaded 
   // BooksAPI.getAll().then((books) => {
   //   this.setState({ books: books })
  //  }
 //   )
 // }
  
  moveShelf = (book, shelf) => {
    if (book.shelf !== shelf) {
      BooksAPI.update(book, shelf).then(() => {
        BooksAPI.getAll().then(books => {
          this.setState({ books });
        });
      });
    }
  };

  render() {
    return (
      <div className="app">
      
        <Route exact path="/" render={() => (
          <HomePage
            books={this.state.books}
            moveShelf={this.moveShelf}
          />
        )}/>

        <Route exact path="/search" render={() => (
          <SearchBooks 
          moveShelf={this.moveShelf}
          books={this.state.books}
          />
        )}/>

      </div>
    )
  }
}

export default BooksApp
