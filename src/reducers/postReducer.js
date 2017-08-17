import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function postReducer(state = initialState.posts, action) {
  switch(action.type) {
    case types.ADD_POST_SUCCESS:
      return [
        ...state,
        action.post
      ]
    case types.LOAD_POSTS_SUCCESS:
      return action.posts
    case types.VOTE_SUCCESS:
      return [
        ...state.map(post => post.id === action.post.id ? action.post : post)
      ]
    default:
      return state
  }
}
