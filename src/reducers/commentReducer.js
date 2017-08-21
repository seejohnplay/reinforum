import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function commentReducer(state = initialState.comments, action) {
  const nextState = {...state}

  switch(action.type) {
    case types.ADD_COMMENT_SUCCESS:
      nextState[action.comment.parentId] = [
        ...state[action.comment.parentId],
        action.comment
      ]
      return nextState
    case types.EDIT_COMMENT_SUCCESS:
      nextState[action.comment.parentId] = [
        ...state[action.comment.parentId].filter(comment => comment.id !== action.comment.id),
        action.comment
      ]
      return nextState
    case types.LOAD_COMMENTS_SUCCESS:
      nextState[action.postId] = action.comments
      return nextState
    default:
      return state
  }
}