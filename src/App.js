import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import PostList from './components/PostList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route path="/:category?" component={PostList} />
      </div>
    )
  }
}

export default App