import React from 'react'
import { connect } from 'react-redux'
import { addPost, deletePost, loadPosts, updateSortKey, votePost } from '../actions'
import { Button, ButtonGroup, Card, CardTitle, CardColumns } from 'reactstrap'
import Post from './Post'

class PostList extends React.Component {
  componentDidMount() {
    this.props.loadPosts(this.props.match.params.category)
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.category !== prevProps.match.params.category) {
      this.props.loadPosts(this.props.match.params.category)
    }
  }

  sortBy(posts, prop) {
    return posts.sort((a,b) => b[prop] - a[prop])
  }

  render() {
    return (
      <div>
        <Card block>
          <CardTitle>
            <span style={{marginRight: "10px"}}>Sort by:</span>
            <ButtonGroup>
              <Button
                className={this.props.sortKey === "voteScore" ? "active" : ""}
                style={{cursor: "pointer"}}
                onClick={() => this.props.updateSortKey("voteScore")}>
                  Popularity
              </Button>
              <Button
                className={this.props.sortKey === "timestamp" ? "active" : ""}
                style={{cursor: "pointer"}}
                onClick={() => this.props.updateSortKey("timestamp")}>
                  Timestamp
              </Button>
            </ButtonGroup>
          </CardTitle>
        </Card>
        <CardColumns>
          {this.sortBy(this.props.posts, this.props.sortKey).map(post => (
            <Post
              key={post.id}
              post={post}
              deletePost={this.props.deletePost}
              vote={this.props.votePost}
            />
          ))}
        </CardColumns>
      </div>
    )
  }
}

function mapStateToProps ({ posts, sortKey }) {
  return {
    posts: posts,
    sortKey: sortKey
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPost: (post) => dispatch(addPost(post)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    loadPosts: (category) => dispatch(loadPosts(category)),
    updateSortKey: (sortKey) => dispatch(updateSortKey(sortKey)),
    votePost: (post_id, option) => dispatch(votePost(post_id, option))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)
