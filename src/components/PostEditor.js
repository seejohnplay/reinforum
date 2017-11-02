import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PostForm from './PostForm'
import { addPost, editPost } from '../actions'

class PostEditor extends React.Component {

  submit = (post) => {
    this.props.post ? this.props.editPost(post) : this.props.addPost(post)
    this.props.history.goBack()
  }

  render() {
    const { categories, post } = this.props

    return (
      <div>
        <PostForm
          categories={categories}
          postToEdit={post}
          onSubmit={this.submit} />
      </div>
    )
  }
}

function mapStateToProps({ categories, posts }, ownProps) {
  return {
    categories,
    posts,
    post: posts.find(post => post.id === parseInt(ownProps.match.params.postId, 10))
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPost: (post) => dispatch(addPost(post)),
    editPost: (post) => dispatch(editPost(post))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostEditor))
