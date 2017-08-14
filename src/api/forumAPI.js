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
}

export default forumAPI
