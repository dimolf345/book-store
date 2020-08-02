import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import styled from 'styled-components'
import {Home} from './components/pages/Home'
import Results from './components/pages/Results'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import {Switch, Route} from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
  }

  render(){
    return (
      <div>
      <Navbar/>
        <Switch>
        <Route exact path = "/" component={Home}></Route>
        <Route path ="/results" component={Results}></Route>
        </Switch>
      <Footer />
      </div>
    )
  }
}

export default App;
