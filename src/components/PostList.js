import React from 'react'
import { connect } from 'react-redux'
import { addPost, deletePost, loadPosts, vote } from '../actions'
import { Card, Button, CardTitle, CardText, CardColumns } from 'reactstrap'
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

  render() {
    const { cardColor } = this.state

    return (
      <div>
        <CardColumns>
          {this.props.posts.map(post => (
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
                {post.title} <small>{post.category}</small>
              </CardTitle>
              <CardText>{post.body} - {post.author}</CardText>
              <Button>Read comments</Button>
              <Button color="danger" onClick={() => this.props.deletePost(post.id)}>Delete</Button>
          </Card>))}
        </CardColumns>
      </div>
    )
  }
}

function mapStateToProps ({ posts }) {
  return {
    posts: posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPost: (post) => dispatch(addPost(post)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    loadPosts: (category) => dispatch(loadPosts(category)),
    vote: (post_id, option) => dispatch(vote(post_id, option))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)
