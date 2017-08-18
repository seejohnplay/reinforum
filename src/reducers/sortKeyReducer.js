import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function sortKeyReducer(state = initialState.sortKey, action) {
  switch(action.type) {
    case types.UPDATE_SORT_KEY_SUCCESS:
      return action.sortKey
    default:
      return state
  }
}