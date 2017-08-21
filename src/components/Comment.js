import React from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'
import { Button, Card, CardText } from 'reactstrap'
import ArrowUpIcon from 'react-icons/lib/fa/arrow-up'
import ArrowDownIcon from 'react-icons/lib/fa/arrow-down'

class Comment extends React.Component {
  render() {
    const { comment } = this.props

    return (
      <Card key={comment.id}>
        <CardText>
          <button onClick={() => this.props.vote(comment.id, "upVote")}
            style={{backgroundColor: "transparent", border: "none"}}>
              <ArrowUpIcon />
          </button>
            {comment.voteScore}
          <button onClick={() => this.props.vote(comment.id, "downVote")}
            style={{backgroundColor: "transparent", border: "none"}}>
              <ArrowDownIcon />
          </button>
          <span className="float-right">
            <Button tag={Link} to={"/posts/"+comment.parentId+"/comments/"+comment.id+"/edit"}>Edit</Button>
            <Button style={{cursor: "pointer"}} color="danger" onClick={() => this.props.deletePost(comment.id)}>Delete</Button>
          </span>
          {comment.body} - {comment.author} (<TimeAgo date={comment.timestamp} live={false} />)
        </CardText>
      </Card>
    )
  }
}

export default Comment
