import React from 'react'
import {Link} from 'react-router-dom'


function amazSearch (title, author) {
  let bookTitle = title.toLowerCase().replaceAll(" ","+")
  let bookAuthor
  try {
    bookAuthor = author.toString()
  }
  catch {
    bookAuthor= ''
  }
  finally {
    let link = 'https://www.amazon.it/s?k=' + bookTitle +'+' + bookAuthor.toLowerCase().replaceAll(" ", "+")
    return ({
      author: bookAuthor,
      link: link
    })
  }
}

const BookCard = (props) => {
  const bookTitle = amazSearch(props.title, props.author)
  // let amazLink = amazSearch(props.title, props.author)
  return(
  <div className="card mr-2 mb-3" style={{maxWidth: '300px'}} >
    {props.image? <img src={props.image} alt={props.title} style={{margin: '0 auto'}} height="250"/> : <h3>Image not available</h3>}
    <div className="card-body" >
      <h4 className="card-title">{props.title}</h4>
      <h5 className="card-title">{bookTitle.author}</h5>
      <p className="card-text">{props.published}</p>
      <a  className="btn btn-warning btn-block" href={bookTitle.link}>Buy</a>
    </div>
  </div>
)
}



export default BookCard
