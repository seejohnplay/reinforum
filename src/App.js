import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import PostEditor from './components/PostEditor'
import PostList from './components/PostList'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route path="/new_post" component={PostEditor} />
        <Route path="/:category?" component={PostList} />
      </div>
    )
  }
}
