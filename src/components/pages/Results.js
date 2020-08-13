import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Home} from './Home'
import styled from 'styled-components'
import { Backgound} from './Home'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import Error from '../Error'
import Booklist from '../Booklist'

class Results extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      isLoading: true,
      books: [],
      searchUrl: this.props.location.state.searchUrl,
      response: ''
    }
    this.getData = this.getData.bind(this)
  }

  getData() {
    axios.get(this.state.searchUrl)
    .then(response => {
      this.setState({
        isLoading: false,
        books: response.data.items,
        response: response.request.status
      })
    })
  }

  componentDidMount(){
    this.getData()
  }

  render() {
    const Loading = () => {
      return(
      <div className="d-flex justify-content-center pt-5">
        <div className="spinner-border" role="status">
          <span className="sr-only text-center"></span>
        </div>
        <span>&nbsp;Retrieving Data from Server...</span>
      </div>
    )}

    const BookDiv = () => {
      return(
        <div className="container mt-3 ">
          <div className="row row-cols-2 row-cols-md-3 justify-content-center">
          <Booklist books={this.state.books}/>
          </div>
        </div>
      )
    }

    return(
      <React.Fragment>
      <Navbar className="navbar">
        <Link className="btn btn-outline-warning" to=''>New Search</Link>
      </Navbar>
      <Backgound style={{overflow: 'scroll'}}>
        {(this.state.isLoading)? <Loading/> : (this.state.response === 200)? <BookDiv/>: <Error errorCode={404} statusText={"Si nu trmn"}/>}
      </Backgound>
      </React.Fragment>
    )
  }
}

const Navbar = styled.div`
background-color: #E5E2DF;

a {
  margin: 0 auto;
  color: black;
  font-weight: bold;
}

`

export default Results
