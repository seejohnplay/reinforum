import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import uuid from 'uuid'
import PostForm from './PostForm'
import { addPost, editPost } from '../actions'

class PostEditor extends React.Component {
  componentWillMount() {
    this.postToEdit = this.props.posts.find(post => post.id === this.props.match.params.postId)
  }

  submit = (post) => {
    post.id = post.id || uuid.v4()
    post.timestamp = Date.now()

    this.postToEdit ? this.props.editPost(post) : this.props.addPost(post)
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
        <PostForm
          categories={this.props.categories}
          postToEdit={this.postToEdit}
          onSubmit={this.submit} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    posts: state.posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPost: (post) => dispatch(addPost(post)),
    editPost: (post) => dispatch(editPost(post))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostEditor))