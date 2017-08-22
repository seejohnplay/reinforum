import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class CommentForm extends Component {
  componentDidMount() {
    this.props.initialize(this.props.commentToEdit)
  }

  render() {
    const { commentToEdit, handleSubmit } = this.props

    return (
      <div className="col col-md-6 offset-md-3" id="comment-form">
        <h2>{commentToEdit ? 'Edit' : 'New'} Comment</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Body</label>
            <Field className="form-control" name="body" component="textarea"/>
          </div>
          <div className="form-group">
            <label>Author</label>
            <Field className="form-control" name="author" component="input" type="text" />
          </div>
          <input className="btn btn-secondary" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'commentForm'
})(CommentForm)
