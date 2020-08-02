import React, { Component } from 'react'
import Footer from '../layout/Footer'
import Cite from '../layout/Cite'
import styled from 'styled-components'
import img from '../layout/book.jpg'
import Navbar from '../layout/Navbar'
import SearchBar from '../layout/SearchBar'
import {Redirect} from 'react-router-dom'



const SearchContext = React.createContext()


class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      showCite: true,
      searchText: '',
      userSearch: '',
      redirect: null
    }
  }


  handleSearch = (e) => {
    this.setState({searchText: e.target.value})
  }

  handleSubmit= (e) => {
    e.preventDefault()
    let search = this.state.searchText;
    search= search.replace(" ", "+").toLowerCase() +'&key='+process.env.REACT_APP_KEY;
    let searchUrl = 'https://www.googleapis.com/books/v1/volumes?q='+search
    this.setState({
      showCite: false,
      redirect: true,
      userSearch: searchUrl})
  }

  render() {
    if (this.state.redirect) {
      return(
       <Redirect to={{
        pathname: '/results',
        state: {userSearch: this.state.userSearch}
      }}/>)}
      return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          handleSearch={this.handleSearch}
          handleSubmit={this.handleSubmit}/>
        <Backgound>
          {this.state.showCite && <Cite/>}
        </Backgound>
      </div>
    )
  }
}

const SearchConsumer = SearchContext.Consumer

const Backgound = styled.div`
  min-height: 700px;
  max-height: 900px;
  background-image: url(${img});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

`
export {Home, SearchContext, SearchConsumer , Backgound}
