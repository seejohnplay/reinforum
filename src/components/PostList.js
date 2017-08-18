import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'
import { addPost, deletePost, loadPosts, updateSortKey, vote } from '../actions'
import { Button, ButtonGroup, Card, CardTitle, CardText, CardColumns } from 'reactstrap'
import ArrowUpIcon from 'react-icons/lib/fa/arrow-up'
import ArrowDownIcon from 'react-icons/lib/fa/arrow-down'

class PostList extends React.Component {
  // TODO: Move this out of state and into CSS classes
  state = {
    cardColor: {
      react: 'info',
      redux: 'warning',
      udacity: 'danger'
    }
  }

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
    const { cardColor } = this.state

    return (
      <div>
        <Card block>
          <CardTitle>
          <span style={{marginRight: "10px"}}>Sort by:</span>
            <ButtonGroup>
              <Button
                className={this.props.sortKey === "voteScore" && "active"}
                style={{cursor: "pointer"}}
                onClick={() => this.props.updateSortKey("voteScore")}>
                  Popularity
              </Button>
              <Button
                className={this.props.sortKey === "timestamp" && "active"}
                style={{cursor: "pointer"}}
                onClick={() => this.props.updateSortKey("timestamp")}>
                  Timestamp
              </Button>
            </ButtonGroup>
          </CardTitle>
        </Card>
        <CardColumns>
          {this.sortBy(this.props.posts, this.props.sortKey).map(post => (
            <Card block inverse color={cardColor[post.category]} key={post.id}>
              <CardTitle>
                <button onClick={() => this.props.vote(post.id, "upVote")}
                  style={{backgroundColor: "transparent", border: "none"}}>
                    <ArrowUpIcon />
                </button>
                  {post.voteScore}
                <button onClick={() => this.props.vote(post.id, "downVote")}
                  style={{backgroundColor: "transparent", border: "none"}}>
                    <ArrowDownIcon />
                </button>
                {post.title} <small><Link to={"/" + post.category}>{post.category}</Link></small>
              </CardTitle>
              <CardText>
                {post.body} - {post.author} (<TimeAgo date={post.timestamp} live={false} />)
              </CardText>
              <Button style={{cursor: "pointer"}}>Read comments</Button>
              <Button tag={Link} to={"/edit_post/"+post.id}>Edit</Button>
              <Button style={{cursor: "pointer"}} color="danger" onClick={() => this.props.deletePost(post.id)}>Delete</Button>
          </Card>))}
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
    vote: (post_id, option) => dispatch(vote(post_id, option))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)
