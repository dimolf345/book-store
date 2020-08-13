import React from 'react'
import BookCard from './BookCard'
import notAvailable from './image-not-available.jpg'

const Booklist = (props) => {
    return(
        props.books.map((book) =>  {
          let image
            try {
              image = book.volumeInfo.imageLinks.thumbnail
            } catch {
              image = notAvailable
            }
            finally {
            return(
            <BookCard
              key = {book.id}
              image={image}
              title={book.volumeInfo.title}
              author = {book.volumeInfo.authors}
              published={book.volumeInfo.publishedDate}/>)
            }
    }
  ))
}







export default Booklist
