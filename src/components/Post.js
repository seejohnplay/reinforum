import React from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'
import { Button, Card, CardTitle, CardText } from 'reactstrap'
import ArrowUpIcon from 'react-icons/lib/fa/arrow-up'
import ArrowDownIcon from 'react-icons/lib/fa/arrow-down'

class Post extends React.Component {
  render() {
    const { post } = this.props

    return (
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
        <Button tag={Link} to={"/" + post.category + "/" + post.id}>Read comments</Button>
        <Button tag={Link} to={"/edit_post/"+post.id}>Edit</Button>
        <Button style={{cursor: "pointer"}} color="danger" onClick={() => this.props.deletePost(post.id)}>Delete</Button>
      </Card>
    )
  }
}

export default Post