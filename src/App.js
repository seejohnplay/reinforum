import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Category from './components/Category'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route path="/:name?" component={Category} />
      </div>
    )
  }
}
