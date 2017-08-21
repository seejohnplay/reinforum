import React from 'react'
import Comment from './Comment'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup, Card, CardTitle } from 'reactstrap'

class CommentList extends React.Component {

  sortBy(comments, prop) {
    return comments.sort((a,b) => b[prop] - a[prop])
  }

  render() {
    const { parentId } = this.props

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
      {this.props.comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
        <div>
          <Button tag={Link} to={"/posts/"+parentId+"/comments/new"}>New Comment</Button>
        </div>
      </div>
    )
  }
}

export default CommentList
