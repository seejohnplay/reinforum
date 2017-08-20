import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import PostDetails from './components/PostDetails'
import PostEditor from './components/PostEditor'
import PostList from './components/PostList'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/new_post" component={PostEditor} />
          <Route path="/edit_post/:postId" component={PostEditor} />
          <Route path="/:category/:postId" component={PostDetails} />
          <Route path="/:category?" component={PostList} />
        </Switch>
      </div>
    )
  }
}
