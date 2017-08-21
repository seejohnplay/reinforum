class forumAPI {
  static getAllCategories() {
    return fetch('http://localhost:5001/categories',
      { headers: { 'Authorization': 'whatever-you-want' }})
    .then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }

// Posts

  static addPost(post) {
    return fetch('http://localhost:5001/posts',
      {
        headers: {
          'Authorization': 'whatever-you-want',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(post)
      })
    .then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }

  static getAllPosts(category) {
    const url = category ? `/${category}/posts` : '/posts'
    return fetch('http://localhost:5001' + url,
      { headers: { 'Authorization': 'whatever-you-want' }})
    .then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }

  static deletePostById(postId) {
    return fetch(`http://localhost:5001/posts/${postId}`,
      {
        headers: {
          'Authorization': 'whatever-you-want',
        },
        method: 'DELETE',
      })
    .then(response => {
      return response
    }).catch(error => {
      return error
    })
  }

  static editPost(post) {
    return fetch(`http://localhost:5001/posts/${post.id}`,
      {
        headers: {
          'Authorization': 'whatever-you-want',
          'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(post)
      })
    .then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }

  static votePost(postId, option) {
    return fetch(`http://localhost:5001/posts/${postId}`,
      {
        headers: {
          'Authorization': 'whatever-you-want',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({option: option})
      })
    .then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }

// Comments
  static addComment(comment) {
    return fetch('http://localhost:5001/comments',
      {
        headers: {
          'Authorization': 'whatever-you-want',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(comment)
      })
    .then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }

  static deleteCommentById(commentId) {
    return fetch(`http://localhost:5001/comments/${commentId}`,
      {
        headers: {
          'Authorization': 'whatever-you-want',
        },
        method: 'DELETE',
      })
    .then(response => {
      return response
    }).catch(error => {
      return error
    })
  }

  static getcommentsByPostId(postId) {
    return fetch(`http://localhost:5001/posts/${postId}/comments`,
      { headers: { 'Authorization': 'whatever-you-want' }})
    .then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }

  static editComment(comment) {
    return fetch(`http://localhost:5001/comments/${comment.id}`,
      {
        headers: {
          'Authorization': 'whatever-you-want',
          'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(comment)
      })
    .then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }

  static voteComment(commentId, option) {
    return fetch(`http://localhost:5001/comments/${commentId}`,
      {
        headers: {
          'Authorization': 'whatever-you-want',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({option: option})
      })
    .then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }

}

export default forumAPI
