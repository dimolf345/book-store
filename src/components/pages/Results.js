import React, {Component} from 'react'
import styled from 'styled-components'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import {SearchConsumer, Backgound} from './Home'
import request from 'superagent'

class Results extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      isLoading: true,
      books: [],
      searchUrl: this.props.location.state.userSearch,
      response: ''
    }
  }

  getData() {
    setTimeout(() => this.setState({isLoading: false}), 1000)

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

    return(
      <Backgound>
        {(this.state.isLoading)? <Loading/> : <h1 className="text-center">Si nu TRMN</h1>}
      </Backgound>
    )
    // return(
    //   <SearchConsumer>
    //     {data => {
    //       console.log(data)
    //       return (
    //         <Backgound>
    //           {(this.state.isLoading)? <Loading/> : <h1>Porco Dio</h1>}
    //         </Backgound>)
    //       }
    //     }
    //   </SearchConsumer>
    // )
  }
}



export default Results
