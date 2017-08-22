import React from 'react'
import Post from './Post'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { deletePost, votePost } from '../actions'

function PostDetails(props) {
  const { deletePost, post, votePost } = props

  return (
    <div>
      {post ? (
        <Post
          key={post.id}
          post={post}
          deletePost={deletePost}
          vote={votePost}
          showComments={true}
        />
      ) : (
        <Redirect to="/" />
      )}
    </div>
  )
}

function mapStateToProps ({ posts }, ownProps) {
  return {
    post: posts.find(post => post.id === ownProps.match.params.postId)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deletePost: (postId) => dispatch(deletePost(postId)),
    votePost: (postId, option) => dispatch(votePost(postId, option))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails)
