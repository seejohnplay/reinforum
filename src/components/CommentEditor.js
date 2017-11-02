import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CommentForm from './CommentForm'
import { addComment, editComment } from '../actions'

class CommentEditor extends React.Component {
  componentWillMount() {
    this.parentPost = this.props.posts.find(post => post.id === parseInt(this.props.match.params.postId, 10))
    this.commentToEdit = this.props.comments[this.parentPost.id].find(comment => comment.id === parseInt(this.props.match.params.commentId, 10))
  }

  submit = (comment) => {
    comment.post_id = this.parentPost.id

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

function mapStateToProps({ comments, posts }) {
  return {
    comments,
    posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
    editComment: (comment) => dispatch(editComment(comment))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentEditor))