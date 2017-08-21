import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import uuid from 'uuid'
import CommentForm from './CommentForm'
import { addComment, editComment } from '../actions'

class CommentEditor extends React.Component {
  componentWillMount() {
    this.parentPost = this.props.posts.find(post => post.id === this.props.match.params.postId)
    this.commentToEdit = this.props.comments[this.parentPost.id].find(comment => comment.id === this.props.match.params.commentId)
  }

  submit = (comment) => {
    comment.id = comment.id || uuid.v4()
    comment.parentId = this.parentPost.id
    comment.timestamp = Date.now()

    this.commentToEdit ? this.props.editComment(comment) : this.props.addComment(comment)
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
        <CommentForm
          commentToEdit={this.commentToEdit}
          onSubmit={this.submit} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments,
    posts: state.posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
    editComment: (comment) => dispatch(editComment(comment))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentEditor))