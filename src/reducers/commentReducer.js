import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function commentReducer(state = initialState.comments, action) {
  const nextState = {...state}

  switch(action.type) {
    case types.ADD_COMMENT_SUCCESS:
      nextState[action.comment.post_id] = [
        ...state[action.comment.post_id],
        action.comment
      ]
      return nextState
    case types.DELETE_COMMENT_SUCCESS:
      nextState[action.parentId] = [
        ...nextState[action.parentId].filter(comment => comment.id !== action.commentId)
      ]
      return nextState
    case types.EDIT_COMMENT_SUCCESS:
      nextState[action.comment.post_id] = [
        ...state[action.comment.post_id].filter(comment => comment.id !== action.comment.id),
        action.comment
      ]
      return nextState
    case types.LOAD_COMMENTS_SUCCESS:
      nextState[action.postId] = action.comments
      return nextState
    case types.VOTE_COMMENT_SUCCESS:
      nextState[action.comment.post_id] = [
        ...state[action.comment.post_id].map(comment => comment.id === action.comment.id ? action.comment : comment)
      ]
      return nextState
    default:
      return state
  }
}