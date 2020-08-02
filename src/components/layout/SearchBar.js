import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const SearchBar = (props) => {
    return(
      <SearchBox>
      <div className="d-flex container justify-content-center">
      <form
        className="form-control-lg form-inline mb-3">
        <input className="form-control"
          type="text"
          onChange={props.handleSearch}
          value={props.searchText}
          name="searchText"
          placeholder="Search your favourite book"/>
        <button type="submit"
          onClick={props.handleSubmit}
          className="btn btn-outline-warning">
        <i className="fas fa-search"/>
        <Link to="/results">
        Search
        </Link>
        </button>
      </form>
      </div>
      </SearchBox>
      )
  }


export default SearchBar

const SearchBox = styled.div`

  background-color: #E5E2DF;

  input[type=text] {
    width: 280px;
  }

  .form-control:focus {
  border-color: rgb(255,193,7);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 193, 7, 0.6);
}

  button {
    color: black;
  }

  a {
    color: black;
    text-decoration: none;
  }

  a:hover, a:focus {
    color:black;
    text-decoration: none;
  }

`
