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

  static getAllPosts() {
    return fetch('http://localhost:5001/posts',
      { headers: { 'Authorization': 'whatever-you-want' }})
    .then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }

  static vote(post_id, option) {
    return fetch(`http://localhost:5001/posts/${post_id}`,
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
