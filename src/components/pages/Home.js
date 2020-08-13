import React, { Component } from 'react'
import Cite from '../layout/Cite'
import styled from 'styled-components'
import img from '../layout/book.jpg'
import SearchBar from '../layout/SearchBar'
import {Redirect} from 'react-router-dom'




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
    if (this.state.searchText.trim()==='') {
      alert('Please enter a valid search text')
      this.setState({searchText: ''})
    } else {
    let search = this.state.searchText.replace(" ", "+").toLowerCase()
    let url = 'https://www.googleapis.com/books/v1/volumes?q='+search +'&key='+process.env.REACT_APP_KEY
    this.setState({
      showCite: false,
      redirect: true,
      userSearch: search,
      searchUrl: url })
  }
}

  render() {
    if (this.state.redirect) {
      return(
       <Redirect to={{
        pathname: '/results',
        state: {userSearch: this.state.userSearch,
                searchUrl: this.state.searchUrl
                }
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


const Backgound = styled.div`
  min-height: 700px;
  max-height: 900px;
  background-image: url(${img});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

`
export {Home, Backgound}
