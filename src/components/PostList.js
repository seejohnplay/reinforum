import React from 'react'
import { connect } from 'react-redux'
import { addPost, deletePost, loadPosts, updateSortKey, votePost } from '../actions'
import Post from './Post'
import Sort from './Sort'
import { sortBy } from '../utils/helpers'

class PostList extends React.Component {
  componentDidMount() {
    this.props.loadPosts(this.props.match.params.category)
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.category !== prevProps.match.params.category) {
      this.props.loadPosts(this.props.match.params.category)
    }
  }

  render() {
    const { deletePost, posts, sortKey, updateSortKey, votePost } = this.props

    return (
      <div>
        <Sort sortKey={sortKey} updateSortKey={updateSortKey} />
        {sortBy(posts, sortKey).map(post => (
          <Post
            key={post.id}
            post={post}
            deletePost={deletePost}
            vote={votePost}
          />
        ))}
      </div>
    )
  }
}

function mapStateToProps ({ posts, sortKey }) {
  return {
    posts,
    sortKey
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPost: (post) => dispatch(addPost(post)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    loadPosts: (category) => dispatch(loadPosts(category)),
    updateSortKey: (sortKey) => dispatch(updateSortKey(sortKey)),
    votePost: (postId, option) => dispatch(votePost(postId, option))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)
