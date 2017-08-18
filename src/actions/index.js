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

export function vote(post_id, option) {
  return function(dispatch) {
    return forumAPI.vote(post_id, option).then(payload => {
      dispatch(voteSuccess(payload))
    }).catch(error => {
      throw(error)
    })
  }
}

export function voteSuccess(payload) {
  return {type: types.VOTE_SUCCESS, post: payload}
}

export function updateSortKey(sortKey) {
  return function(dispatch) {
    return dispatch(updateSortKeySuccess(sortKey))
  }
}

export function updateSortKeySuccess(payload) {
  return {type: types.UPDATE_SORT_KEY_SUCCESS, sortKey: payload}
}
