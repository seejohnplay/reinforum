import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadComments } from '../actions'
import TimeAgo from 'react-timeago'
import CommentList from './CommentList'
import { Button, Card, CardTitle, CardText } from 'reactstrap'
import ArrowUpIcon from 'react-icons/lib/fa/arrow-up'
import ArrowDownIcon from 'react-icons/lib/fa/arrow-down'

class Post extends React.Component {
  componentWillMount() {
    this.props.loadComments(this.props.post.id)
  }

  render() {
    const { comments, post, showComments } = this.props

    return (
      <div>
      <Card block className={post.category + "-card"}>
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
        {!showComments &&
          <Button tag={Link} to={"/" + post.category + "/" + post.id}>{ (comments[post.id] || []).length } comments</Button>}
        <div className="float-right">
          <Button tag={Link} to={"/posts/"+post.id+"/edit"}>Edit</Button>
          <Button style={{cursor: "pointer"}} color="danger" onClick={() => this.props.deletePost(post.id)}>Delete</Button>
        </div>
      </Card>
      {this.commentCount > 0 &&
        <h4>Comments</h4>}
      {showComments &&
        <CommentList comments={comments[post.id]} parentId={post.id} />
      }
      </div>
    )
  }
}

function mapStateToProps ({ comments }) {
  return {
    comments: comments
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadComments: (postId) => dispatch(loadComments(postId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
