import React from 'react'

class Book extends React.Component {
    render () {
        // using bookImage variable to check if the book has cover image or thumbnail
        let bookImage
        if (this.props.book.imageLinks) {
            bookImage = this.props.book.imageLinks.thumbnail
        } else {
            bookImage = ''
        }
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, 
                        height: 193, backgroundImage: `url("${bookImage}")` }}></div>
                        <div className="book-shelf-changer">
                            <select
                                onChange={(e) => this.props.moveShelf(this.props.book, 
                                    e.target.value)}
                                value={this.props.currentShelf}
                            >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        )
    }
}

export default Book