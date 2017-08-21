import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import CommentEditor from './components/CommentEditor'
import PostDetails from './components/PostDetails'
import PostEditor from './components/PostEditor'
import PostList from './components/PostList'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/posts/new" component={PostEditor} />
          <Route path="/posts/:postId/edit" component={PostEditor} />
          <Route path="/posts/:postId/comments/new" component={CommentEditor} />
          <Route path="/posts/:postId/comments/:commentId/edit" component={CommentEditor} />
          <Route path="/:category/:postId" component={PostDetails} />
          <Route path="/:category?" component={PostList} />
        </Switch>
      </div>
    )
  }
}
