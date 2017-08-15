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

export function loadPosts() {
  return function(dispatch) {
    return forumAPI.getAllPosts().then(payload => {
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
      dispatch(voteSuccess(payload));
    }).catch(error => {
      throw(error)
    })
  }
}

export function voteSuccess(payload) {
  return {type: types.VOTE_SUCCESS, post: payload}
}
