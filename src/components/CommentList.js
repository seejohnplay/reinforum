import React from 'react'
import Comment from './Comment'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteComment, updateSortKey, voteComment } from '../actions'
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
        <Comment
          key={comment.id}
          comment={comment}
          deleteComment={this.props.deleteComment}
          vote={this.props.voteComment} />
      ))}
        <div>
          <Button tag={Link} to={"/posts/"+parentId+"/comments/new"}>New Comment</Button>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ sortKey }) {
  return {
    sortKey: sortKey
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deleteComment: (parentId, commentId) => dispatch(deleteComment(parentId, commentId)),
    updateSortKey: (sortKey) => dispatch(updateSortKey(sortKey)),
    voteComment: (post_id, option) => dispatch(voteComment(post_id, option))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList)
