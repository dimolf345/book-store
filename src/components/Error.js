import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Error = (props) => {
  return(
    <div className="container alert alert-danger justify-content-center">
      <div role="alert">
        <h1>Error code {props.errorCode}! {props.statusText}</h1>
      <div role="alert">
        <h3>Try to go back to <Link to={'/'}>Main Page</Link></h3>
        </div>
      </div>
    </div>
  )
}


export default Error
