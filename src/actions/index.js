import forumAPI from '../api/forumAPI'
import * as types from '../actions/actionTypes'

export function loadCategories() {
  return function(dispatch) {
    return forumAPI.getAllCategories().then(payload => {
      dispatch(loadCategoriesSuccess(payload))
    }).catch(error => {
      throw(error)
    })
  }
}

export function loadCategoriesSuccess(payload) {
  return {type: types.LOAD_CATEGORIES_SUCCESS, categories: payload.categories}
}

// Posts

export function addPost(post) {
  return function(dispatch) {
    return forumAPI.addPost(post).then(payload => {
      dispatch(addPostSuccess(payload))
    }).catch(error => {
      throw(error)
    })
  }
}

export function addPostSuccess(payload) {
  return {type: types.ADD_POST_SUCCESS, post: payload}
}

export function deletePost(postId) {
  return function(dispatch) {
    return forumAPI.deletePostById(postId).then(() => {
      dispatch(deletePostSuccess(postId))
    }).catch(error => {
      throw(error)
    })
  }
}

export function deletePostSuccess(postId) {
  return {type: types.DELETE_POST_SUCCESS, postId: postId}
}

export function editPost(post) {
  return function(dispatch) {
    return forumAPI.editPost(post).then(payload => {
      dispatch(editPostSuccess(payload))
    }).catch(error => {
      throw(error)
    })
  }
}

export function editPostSuccess(payload) {
  return {type: types.EDIT_POST_SUCCESS, post: payload}
}

export function loadPosts(category) {
  return function(dispatch) {
    return forumAPI.getAllPosts(category).then(payload => {
      dispatch(loadPostsSuccess(payload))
    }).catch(error => {
      throw(error)
    })
  }
}

export function loadPostsSuccess(payload) {
  return {type: types.LOAD_POSTS_SUCCESS, posts: payload}
}

export function votePost(postId, option) {
  return function(dispatch) {
    return forumAPI.votePost(postId, option).then(payload => {
      dispatch(votePostSuccess(payload))
    }).catch(error => {
      throw(error)
    })
  }
}

export function votePostSuccess(payload) {
  return {type: types.VOTE_POST_SUCCESS, post: payload}
}

// Comments

export function addComment(comment) {
  return function(dispatch) {
    return forumAPI.addComment(comment).then(payload => {
      dispatch(addCommentSuccess(payload))
    }).catch(error => {
      throw(error)
    })
  }
}

export function addCommentSuccess(payload) {
  return {type: types.ADD_COMMENT_SUCCESS, comment: payload}
}

export function deleteComment(parentId, commentId) {
  return function(dispatch) {
    return forumAPI.deleteCommentById(commentId).then(() => {
      dispatch(deleteCommentSuccess(parentId, commentId))
    }).catch(error => {
      throw(error)
    })
  }
}

export function deleteCommentSuccess(parentId, commentId) {
  return {type: types.DELETE_COMMENT_SUCCESS, parentId: parentId, commentId: commentId}
}

export function editComment(comment) {
  return function(dispatch) {
    return forumAPI.editComment(comment).then(payload => {
      dispatch(editCommentSuccess(payload))
    }).catch(error => {
      throw(error)
    })
  }
}

export function editCommentSuccess(payload) {
  return {type: types.EDIT_COMMENT_SUCCESS, comment: payload}
}

export function loadComments(postId) {
  return function(dispatch) {
    return forumAPI.getcommentsByPostId(postId).then(payload => {
      dispatch(loadCommentsSuccess(postId, payload))
    }).catch(error => {
      throw(error)
    })
  }
}

export function loadCommentsSuccess(postId, payload) {
  return {type: types.LOAD_COMMENTS_SUCCESS, postId: postId, comments: payload}
}

export function voteComment(commentId, option) {
  return function(dispatch) {
    return forumAPI.voteComment(commentId, option).then(payload => {
      dispatch(voteCommentSuccess(payload))
    }).catch(error => {
      throw(error)
    })
  }
}

export function voteCommentSuccess(payload) {
  return {type: types.VOTE_COMMENT_SUCCESS, comment: payload}
}

export function updateSortKey(sortKey) {
  return function(dispatch) {
    return dispatch(updateSortKeySuccess(sortKey))
  }
}

export function updateSortKeySuccess(payload) {
  return {type: types.UPDATE_SORT_KEY_SUCCESS, sortKey: payload}
}

export function toggleIsOpen() {
  return function(dispatch) {
    return dispatch(toggleIsOpenSuccess())
  }
}

export function toggleIsOpenSuccess() {
  return {type: types.TOGGLE_IS_OPEN_SUCCESS}
}
