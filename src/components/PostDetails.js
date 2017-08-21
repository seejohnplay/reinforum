import React from 'react'
import Post from './Post'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { deletePost, vote } from '../actions'

class PostDetails extends React.Component {
  render() {
    return (
      <div>
        {this.props.post ? (
          <Post
            key={this.props.post.id}
            post={this.props.post}
            deletePost={this.props.deletePost}
            vote={this.props.vote}
            showComments={true}
          />
        ) : (
          <Redirect to="/" />
        )}
      </div>
    )
  }
}

function mapStateToProps ({ posts }, ownProps) {
  return {
    post: posts.find(post => post.id === ownProps.match.params.postId)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deletePost: (postId) => dispatch(deletePost(postId)),
    vote: (post_id, option) => dispatch(vote(post_id, option))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails)
