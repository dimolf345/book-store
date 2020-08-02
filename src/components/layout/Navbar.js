import React, { Component } from 'react'

class Navbar extends Component {

  render() {
    return (
      <nav  className="navbar justify-content-center" style={{
        backgroundColor: '#E5E2DF'
      }}>
      <i className="fas fa-book-open fa-3x mr-3"/>
        <h1>Luca&lsquo;s book store</h1>
      </nav>
    )
  }
}

export default Navbar
