import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteComment, updateSortKey, voteComment } from '../actions'
import { Button } from 'reactstrap'
import Comment from './Comment'
import Sort from './Sort'
import { sortBy } from '../utils/helpers'

function CommentList(props) {
  const { comments, deleteComment, parentId,
          sortKey, updateSortKey, voteComment } = props

  return (
    <div>
      <Sort sortKey={sortKey} updateSortKey={updateSortKey} />
      {sortBy(comments, sortKey).map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
          deleteComment={deleteComment}
          vote={voteComment} />
      ))}
      <div style={{marginTop: "5px"}}>
        <Button tag={Link} to={"/posts/"+parentId+"/comments/new"}>New Comment</Button>
      </div>
    </div>
  )
}

function mapStateToProps ({ sortKey }) {
  return {
    sortKey
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deleteComment: (parentId, commentId) => dispatch(deleteComment(parentId, commentId)),
    updateSortKey: (sortKey) => dispatch(updateSortKey(sortKey)),
    voteComment: (postId, option) => dispatch(voteComment(postId, option))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList)
