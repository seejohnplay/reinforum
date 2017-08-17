import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import uuid from 'uuid'
import PostForm from './PostForm'
import { addPost } from '../actions'

class PostEditor extends React.Component {
  submit = (post) => {
    post.id = uuid.v4()
    post.timestamp = Date.now()

    this.props.addPost(post)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <PostForm categories={this.props.categories} onSubmit={this.submit} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPost: (post) => dispatch(addPost(post))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostEditor))