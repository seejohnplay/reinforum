import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class PostForm extends Component {
  componentDidMount() {
    this.props.initialize(this.props.postToEdit)
  }

  render() {
    const { categories, handleSubmit, postToEdit } = this.props

    return (
      <div className="col col-md-6 offset-md-3" id="post-form">
        <h2>{postToEdit ? 'Edit' : 'New'} Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <label>Title</label>
            <Field className="form-control" name="title" component="input" type="text" />
          </div>
          <div className="form-group">
            <label>Author</label>
            <Field className="form-control" name="author" component="input" type="text" />
          </div>
          <div className="form-group">
            <label>Body</label>
            <Field className="form-control" name="body" component="textarea"/>
          </div>
          <div className="form-group">
            <label>Category</label>
              <Field className="form-control" name="category_id" component="select">
                <option disabled hidden value=""></option>
                {categories.map(category => (
                  <option key={category.name} value={category.id}>{category.name}</option>
                ))}
              </Field>
          </div>
          <input className="btn btn-secondary" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'postForm'
})(PostForm)
