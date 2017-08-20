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

  static getcommentsByPostId(postId) {
    return fetch(`http://localhost:5001/posts/${postId}/comments`,
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

  static vote(postId, option) {
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
}

export default forumAPI
