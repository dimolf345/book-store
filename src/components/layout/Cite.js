import React, {Component} from 'react'



function Cite() {
  return (
    <blockquote className="container text-center pt-3">
      <i className="fas fa-quote-left pr-3"/>
      <span style={ { fontFamily: 'Dancing Script', fontSize: '1.5rem'}}>
      Books are the quietest and most constant of friends. They are the most accessible and wisest of
      councelor, and the most patient of teachers.
      </span>
      <i className="fas fa-quote-right pl-3"/>
      <hr className="clients-hr"/>
      <cite><strong>&#8212; Charles W. Elliot</strong></cite>
    </blockquote>
  )

}



export default Cite
