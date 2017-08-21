import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function navigationReducer(state = initialState.navIsOpen, action) {
  switch(action.type) {
    case types.TOGGLE_IS_OPEN_SUCCESS:
      return !state
    default:
      return state
  }
}