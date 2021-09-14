import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from '../components/Book'

class SearchBooks extends React.Component {
    
    state = {
        query: '',
        matchedBooks: []
    }

    updateQuery = (query) => {     
        let trimmedQuery = query.replace(/^\s+/, '')
        this.setState({
            query: trimmedQuery
        })
        this.fetchMatchedBooks(query)
    }

    fetchMatchedBooks = (query) => {
        if (query.length !== 0) {
            BooksAPI.search(query).then((matchedBooks) => {
                this.setState({
                    matchedBooks: matchedBooks.error ? [] : matchedBooks,
                })
            })
        } else {
            this.setState({matchedBooks: []})
        }
    }

    render () {
        return(
            <div className="search-books">
                <div className="search-books-bar">                  
                    <Link to="/" className="close-search">
                      Close
                    </Link>              
                    <div className="search-books-input-wrapper">
                        <input 
                          type="text"
                          placeholder="Search by title or author"
                          value={this.state.query}
                          onChange={(e) => this.updateQuery(e.target.value)}
                        />
                    </div>
                </div>
            
                <div className="search-books-results">
                  <ol className="books-grid">
                        { this.state.matchedBooks.map(matchedBook => {
                                
                                let shelf = "none"
                                this.props.books.forEach(book => {
                                    if (book.id !== matchedBook.id) {
                                        matchedBook.shelf = "none"
                                    } else {
                                        shelf = book.shelf
                                    }
                                })
                                
                                return(
                                    <li key={matchedBook.id}>
                                      <Book 
                                          book={matchedBook}
                                          moveShelf={this.props.moveShelf}
                                          currentShelf={shelf}
                                      />
                                    </li>
                                )
                              }
                            )
                        }
                  </ol>
                </div>
            </div>
        );
    }
}

export default SearchBooks